import Layout from 'src/layout/Layout';
import styles from './write-blog.module.scss';
import { Editor, EditorState } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useEffect, useState } from 'react';

export default function WriteBlog(): JSX.Element {
  const [editorState, setEditorState] = useState<EditorState>();
  
  useEffect(() => {
    const initialEditorState = EditorState?.createEmpty();
    setEditorState(initialEditorState);
  }, [])

  const onEditorStateChange = (editorState: EditorState) => {
    setEditorState(editorState);
  }

  return (
    <Layout>
      <div className={styles['write-blog']}>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
        />
      </div>
    </Layout>
  )
}
