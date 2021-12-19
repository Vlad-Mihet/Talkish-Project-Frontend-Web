import { useRef } from 'react';
import styles from './write-blog.module.scss';
import {
  Navbar,
  Editor,
} from './components';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

interface EditorEvent {
  id: string;
  data?: string;
  editor?: any;
  evtName: string;
}

export default function WriteBlog(): JSX.Element {
  const editorRef = useRef<BalloonEditor | null>();

  // Setting the editor ref
  const handleEditorReady = ({
    id,
    editor,
    evtName,
  }: EditorEvent) => {
    editorRef.current = editor;
    console.log(id, editor, evtName);
  };

  const handleEditorError = ({
    id,
    editor,
    evtName,
  }: EditorEvent) => {
    console.log(id, editor, evtName);
  };

  const handleEditorUnmounted = ({
    id,
    editor,
    evtName,
  }: EditorEvent) => {
    console.log(id, editor, evtName);
  };

  // Getting the editor ref's data
  const handleSaveEditorContent = (): void => {
    console.log(editorRef.current?.getData());
  };

  return (
    <div className={styles['write-blog']}>
      <Navbar
        saveStoryContent={handleSaveEditorContent}
      />
      <div className={styles['editor-container']}>
        <Editor
          handleEditorReady={handleEditorReady}
          handleEditorError={handleEditorError}
          handleEditorUnmounted={handleEditorUnmounted}
        />
      </div>
    </div>
  );
}
