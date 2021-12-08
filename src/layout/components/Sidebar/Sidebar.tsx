import styles from './sidebar.module.scss';
import { UsefulLinks } from '../../../routes';

interface SidebarProps {
  topSection?: JSX.Element;
  middleSection?: JSX.Element;
  bottomSection?: JSX.Element;
}

const capitalizeString = (str: string) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

export default function Sidebar({
  topSection,
  middleSection,
  bottomSection,
}: SidebarProps): JSX.Element {
  return (
    <div className={styles.sidebar}>
      <div className={styles['top-section']}>
        {topSection}
      </div>
      <div className={styles['middle-section']}>
        {middleSection}
      </div>
      <div className={styles['bottom-section']}>
        {bottomSection}
      </div>
      <div className={styles['useful-links-container']}>
        {Object.keys(UsefulLinks).map((routeName, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <p key={index}>
            {capitalizeString(routeName)}
          </p>
        ))}
      </div>
    </div>
  );
}

Sidebar.defaultProps = {
  topSection: null,
  middleSection: null,
  bottomSection: null,
};
