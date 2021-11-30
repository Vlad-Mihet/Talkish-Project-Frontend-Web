import styles from './sidebar.module.scss'
import { UsefulLinks } from '../../../routes';

interface SidebarProps {
  topSection?: JSX.Element;
  middleSection?: JSX.Element;
  bottomSection?: JSX.Element;
}

const capitalizeString = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

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
            {capitalizeString(routeName)}
          </p>
        ))}
      </div>
    </div>
  )
}
