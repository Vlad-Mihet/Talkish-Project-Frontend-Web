import { Navbar } from "./components";
import styles from './layout.module.scss';

export default function Layout(props: {
  children: JSX.Element;
  sidebar?: JSX.Element;
}) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles['main-content']}>
          {props.children}
        </div>
        {props.sidebar}
      </div>
    </div>
  )
}
