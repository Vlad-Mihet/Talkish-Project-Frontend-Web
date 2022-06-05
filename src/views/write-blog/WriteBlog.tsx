import { useEffect, useRef } from 'react';
import styles from './write-blog.module.scss';
import {
  Navbar,
  Editor,
} from './components';
import BalloonEditor from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';
import extractBlogTitle from './utils/extractBlogTitle';
import retrieveFromLocalStorage from 'src/utils/retrieveFromLocalStorage';
import { JWT_TOKEN_KEY } from 'src/store/auth/constants';
import useAuthUser from 'src/hooks/useAuthUser';
import extractBlogContentWithoutTitle from './utils/extractBlogContentWithoutTitle';
import axios from 'axios';
import { Endpoints } from 'src/config';
import { AuthUser } from 'src/types/models';

interface EditorEvent {
  id: string;
  data?: string;
  editor?: any;
}

export default function WriteBlog(): JSX.Element {
  const editorRef = useRef<BalloonEditor | null>();

  // Storing values in ref in order to prevent them from being cleared before unmount.
  const blogTitleRef = useRef('');
  const blogContentRef = useRef('');
  const authorIdRef = useRef('');

  // We'll always have access to the token from this view
  const jwtToken = String(retrieveFromLocalStorage(JWT_TOKEN_KEY));

  const createBlogEndpoint = `${Endpoints.ROOT}/${Endpoints.BLOGS}`;

  const user: Record<string, string> | AuthUser = useAuthUser();

  // Setting the editor ref
  const handleEditorReady = ({ editor }: EditorEvent) => {
    editorRef.current = editor;
  };

  const handleEditorError = ({
    id,
    editor,
  }: EditorEvent) => {
    console.log(id, editor);
  };

  const createDraftBlog = (): void => {
    axios.post(
      createBlogEndpoint,
      {
        title: blogTitleRef.current,
        content: blogContentRef.current,
        authorId: authorIdRef.current,
      },
      {
        // Will test Authorization functionality in the near future.
        headers: {
          'Content-Type': 'application/json',
          Authorization: jwtToken,
        },
      },
    );
  };

  // Getting the editor ref's data
  const handleSaveEditorContent = (): void => {
    if (editorRef.current) {
      const title = extractBlogTitle(editorRef.current.sourceElement);
      const content = editorRef.current.getData();

      const contentWithoutTitle = extractBlogContentWithoutTitle(content);

      blogTitleRef.current = title || '';
      blogContentRef.current = contentWithoutTitle;
    }
  };

  useEffect(() => {
    authorIdRef.current = user.authorId;
  }, [user]);

  useEffect(() => () => {
    // Currently we are only retrieving data from the editor at unmount time,
    // but we might consider doing so at set intervals
    // or when it's being updated in order to prevent any accidental loss due to unforeseen events
    handleSaveEditorContent();

    // We'll only create a new article if there's either a title or any content.
    if (blogTitleRef.current || blogContentRef.current) {
      createDraftBlog();
    }
  }, []);

  return (
    <div className={styles['write-blog']}>
      <Navbar
        saveStoryContent={handleSaveEditorContent}
      />
      <div className={styles['editor-container']}>
        <Editor
          handleEditorReady={handleEditorReady}
          handleEditorError={handleEditorError}
        />
      </div>
    </div>
  );
}
