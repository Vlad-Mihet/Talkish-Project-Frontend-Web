import { useEffect, useRef } from 'react'
import styles from './editor.module.scss';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import { debounce } from 'lodash-es';
import { nanoid } from '@reduxjs/toolkit';
import getEditorConfig from '../../utils/getEditorConfig';

interface EditorEvent {
  id: string;
  data?: string;
  editor?: BalloonEditor | null;
  evtName: string;
}

interface EditorProps {
  debounceTime?: number;
  disabled?: boolean;
  initialEditorData?: string,
  handleInputDebounce?: (data: EditorEvent) => void;
  handleFocus?: (data: EditorEvent) => void;
  handleBlur?: (data: EditorEvent) => void;
  handleEditorReady?: (data: EditorEvent) => void;
  handleEditorError?: (data: EditorEvent) => void;
  handleEditorUnmounted?: (data: EditorEvent) => void;
}

export default function Editor({
  debounceTime = 350,
  disabled = false,
  initialEditorData = '',
  handleInputDebounce,
  handleFocus,
  handleBlur,
  handleEditorReady,
  handleEditorError,
  handleEditorUnmounted,
}: EditorProps) {
  const id = nanoid();
  const editorComp = useRef<HTMLDivElement | null>(null);
  let editorInstance: BalloonEditor | null;

  const setUpEditorEvents = () => {
    if (editorInstance) {
      const emitDebouncedInputEvent = debounce(() => {
        if (editorInstance) {
          const data = editorInstance.getData();

          handleInputDebounce && handleInputDebounce({
            id,
            data,
            editor: editorInstance,
            evtName: 'update:value',
          });
        }
      }, debounceTime, { leading: true });

      editorInstance.model.document.on('change:data', emitDebouncedInputEvent);
      editorInstance.editing.view.document.on('focus', () => {
        handleFocus && handleFocus({
          id,
          editor: editorInstance,
          evtName: 'focus',
        });
      });

      editorInstance.editing.view.document.on('blur', () => {
        handleBlur && handleBlur({
          evtName: 'blur',
          id,
          editor: editorInstance,
        });
      });
    }
  };

  useEffect(() => {
    const sEditorElem: null | HTMLElement | string = editorComp.current;

    const editorConfig = getEditorConfig(initialEditorData, disabled);

    if (sEditorElem && editorConfig) {
      BalloonEditor.create(sEditorElem, editorConfig)
        .then((createdEditor: BalloonEditor) => {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          editorInstance = createdEditor;
  
          setUpEditorEvents();
          handleEditorReady && handleEditorReady({
            evtName: 'ready',
            id,
            editor: editorInstance,
          });
        })
        .catch((error: Error) => {
          console.error(error);

          handleEditorError && handleEditorError({
            evtName: 'error',
            id,
            editor: editorInstance,
          });
        });
    }

    return (() => {
      if (editorInstance) {
        editorInstance.destroy();
        editorInstance = null;
      }
    
      handleEditorUnmounted && handleEditorUnmounted({
        evtName: 'unmount',
        id,
        editor: editorInstance,
      })
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div
      ref={editorComp}
      className={styles['editor-writer']}
    />
  )
}
