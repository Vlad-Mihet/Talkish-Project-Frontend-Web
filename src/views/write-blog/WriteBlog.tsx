import Editor from 'src/components/Editor/Editor';
import Layout from 'src/layout/Layout';
import styles from './write-blog.module.scss';

interface EditorEvent {
  id: string;
  data?: string;
  editor?: any;
  evtName: string;
}

export default function WriteBlog(): JSX.Element {
  const handleEditorReady = ({
    id,
    editor,
    evtName,
  }: EditorEvent) => {
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

  return (
    <Layout>
      <div className={styles['write-blog']}>
        <Editor
          handleEditorReady={handleEditorReady}
          handleEditorError={handleEditorError}
          handleEditorUnmounted={handleEditorUnmounted}
        />
      </div>
    </Layout>
  );
}
