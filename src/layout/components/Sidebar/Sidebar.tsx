import styles from './sidebar.module.scss'
import { UsefulLinks } from '../../../routes';
// import { StringMap } from '../../../types/utilityTypes';

interface SidebarProps {
  topSection?: JSX.Element;
  middleSection?: JSX.Element;
  bottomSection?: JSX.Element;
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
      <div className={styles['useful-links-container']}>
        {Object.keys(UsefulLinks).map((routeName, index) => (
          <p key={index}>
            {routeName}
          </p>
        ))}
      </div>
    </div>
  )
}
