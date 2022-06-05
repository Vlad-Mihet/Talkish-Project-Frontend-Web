import { useEffect, useRef } from 'react';
import styles from './editor.module.scss';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import { nanoid } from '@reduxjs/toolkit';
import getEditorConfig from '../../utils/getEditorConfig';
import { debounce } from 'lodash-es';

interface EditorEvent {
  id: string;
  data?: string;
  editor?: BalloonEditor | null;
}

interface EditorProps {
  initialEditorData?: string;
  debounceTime?: number;
  handleEditorReady?: (data: EditorEvent) => void;
  handleEditorError?: (data: EditorEvent) => void;
  handleEditorUnmounted?: (data: EditorEvent) => void;
  handleEditorContentChange?: (data: EditorEvent) => void;
}

export default function Editor({
  initialEditorData = '',
  debounceTime = 350,
  handleEditorReady,
  handleEditorError,
  handleEditorUnmounted,
  handleEditorContentChange,
}: EditorProps) {
  const id = nanoid();
  const editorComp = useRef<HTMLDivElement | null>(null);
  let editorInstance: BalloonEditor | null;

  useEffect(() => {
    const sEditorElem: null | HTMLElement | string = editorComp.current;

    const editorConfig = getEditorConfig(initialEditorData);

    if (sEditorElem && editorConfig) {
      BalloonEditor.create(sEditorElem, editorConfig)
        .then((createdEditor: BalloonEditor) => {
          editorInstance = createdEditor;

          if (handleEditorContentChange) {
            if (editorInstance) {
              const debounceInputEvent = debounce(() => {
                console.log('Debouncing something');
                if (editorInstance) {
                  const data = editorInstance.getData();

                  handleEditorContentChange({
                    id,
                    data,
                    editor: editorInstance,
                  });
                }
              }, debounceTime, { leading: true });

              editorInstance.model.document.on('change:data', debounceInputEvent);
            }
          }

          if (handleEditorReady) {
            handleEditorReady({
              id,
              editor: editorInstance,
            });
          }
        })
        .catch((error: Error) => {
          console.error(error);

          if (handleEditorError) {
            handleEditorError({
              id,
              editor: editorInstance,
            });
          }
        });
    }

    return (() => {
      if (editorInstance) {
        editorInstance.destroy();
        editorInstance = null;
      }

      if (handleEditorUnmounted) {
        handleEditorUnmounted({
          id,
          editor: editorInstance,
        });
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={editorComp}
      className={styles['editor-writer']}
    />
  );
}

Editor.defaultProps = {
  initialEditorData: '',
  handleEditorReady: undefined,
  handleEditorError: undefined,
  handleEditorUnmounted: undefined,
  handleEditorContentChange: undefined,
  debounceTime: 350,
};
