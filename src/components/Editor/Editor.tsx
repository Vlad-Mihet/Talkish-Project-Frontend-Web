import styles from './editor.module.scss';

/**
 * This will serve as the main editor editable area
 */
export default function Editor() {
  return (
    <div
      className={styles.editor}
      contentEditable
      placeholder="Input your content"
    >
      
    </div>
  )
}
