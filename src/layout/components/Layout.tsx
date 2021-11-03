import { Navbar } from "./";
import styles from './layout.module.scss';

export default function Layout(props: {children: JSX.Element}) {
  return (
    <div className={styles.layout}>
      <Navbar />
      {props.children}
    </div>
  )
}
