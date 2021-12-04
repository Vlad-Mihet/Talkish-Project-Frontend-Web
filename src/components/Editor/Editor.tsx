import { useEffect, useRef } from 'react'
import styles from './editor.module.scss';
import type ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import { debounce } from 'lodash-es';

interface EditorProps {
  debounceTime: number;
  disabled: boolean;
}

interface EditorClass {
  create: (s: HTMLElement | string, c?: EditorConfig) => Promise<ClassicEditor>,
}

export default function Editor({
  debounceTime = 350,
  disabled = false,
}: EditorProps) {
  const editorComp = useRef<HTMLDivElement | null>(null);

  let editorInstance: ClassicEditor | null = null;

  const setUpEditorEvents = () => {
    if (editorInstance) {
      const emitDebouncedInputEvent = debounce(() => {
        if (editorInstance) {
          // const data = editorInstance.getData();
  
          /* emit('update:value', {
            id,
            data,
            editor: editorInstance,
          }); */
        }
      }, debounceTime, { leading: true });
  
      editorInstance.model.document.on('change:data', emitDebouncedInputEvent);
      editorInstance.editing.view.document.on('focus', () => {
        emit('focus', {
          id,
          editor: editorInstance,
        });
      });
      editorInstance.editing.view.document.on('blur', () => {
        emit('blur', {
          id,
          editor: editorInstance,
        });
      });
    }
  };

  useEffect(() => {
    const sEditorElem: null | HTMLElement | string = editorComp.current;

    if (sEditorElem) {
      (editorBundle as EditorClass).create(sEditorElem, editorConfig)
        .then((createdEditor: ClassicEditor) => {
          editorInstance = createdEditor;
          editorInstance.isReadOnly = props.disabled;
  
          setUpEditorEvents();
          emit('ready', {
            id,
            editor: editorInstance,
          });
        })
        .catch((error: Error) => {
          console.error(error);
  
          emit('error', {
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
    
      emit('destroy', {
        id,
        editor: editorInstance,
      });
    })
  })

  useEffect(() => {
    if (editorInstance && disabled) {
      editorInstance.isReadOnly = disabled;
    }
  }, [disabled, editorInstance])
  
  return (
    <div
      ref={editorComp}
      className={styles['editor-writer']}
    >
      
    </div>
  )
}
