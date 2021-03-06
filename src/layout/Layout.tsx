import { Navbar } from './components';
import styles from './layout.module.scss';

interface LayoutProps {
  children: JSX.Element;
  sidebar?: JSX.Element;
}

export default function Layout({
  children,
  sidebar,
}: LayoutProps) {
  return (
    <div className={`${styles.layout} ${sidebar && styles['has-sidebar']}`}>
      <Navbar />
      <div className={styles.main}>
        <div className={styles['main-content']}>
          {children}
        </div>
        {sidebar}
      </div>
    </div>
  );
}

Layout.defaultProps = {
  sidebar: null,
};
