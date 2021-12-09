import { useEffect, useRef } from 'react';
import styles from './editor.module.scss';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import { nanoid } from '@reduxjs/toolkit';
import getEditorConfig from '../../utils/getEditorConfig';

interface EditorEvent {
  id: string;
  data?: string;
  editor?: BalloonEditor | null;
  evtName: string;
}

interface EditorProps {
  initialEditorData?: string,
  handleEditorReady?: (data: EditorEvent) => void;
  handleEditorError?: (data: EditorEvent) => void;
  handleEditorUnmounted?: (data: EditorEvent) => void;
}

export default function Editor({
  initialEditorData = '',
  handleEditorReady,
  handleEditorError,
  handleEditorUnmounted,
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

          if (handleEditorReady) {
            handleEditorReady({
              evtName: 'ready',
              id,
              editor: editorInstance,
            });
          }
        })
        .catch((error: Error) => {
          console.error(error);

          if (handleEditorError) {
            handleEditorError({
              evtName: 'error',
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
          evtName: 'unmount',
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
};
