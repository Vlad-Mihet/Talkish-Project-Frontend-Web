import styles from './sidebar.module.scss'

interface SidebarProps {
  topSection: JSX.Element;
  middleSection: JSX.Element;
  bottomSection: JSX.Element;
}

export default function Sidebar(props: SidebarProps): JSX.Element {
  return (
    <div className={styles.sidebar}>
      <div className={styles['top-section']}>
        {props.topSection}
      </div>
      <div className={styles['middle-section']}>
        {props.middleSection}
      </div>
      <div className={styles['bottom-section']}>
        {props.bottomSection}
      </div>
    </div>
  )
}
