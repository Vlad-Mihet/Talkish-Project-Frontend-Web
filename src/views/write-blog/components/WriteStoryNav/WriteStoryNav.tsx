import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { CButton } from '../../../../components';
import { Paths } from '../../../../routes';
import styles from './write-story-nav.module.scss';

const {
  ROOT,
} = Paths;

interface PropsInterface {
  saveStoryContent: () => void,
}

export default function WriteStoryNav({
  saveStoryContent,
}: PropsInterface) {
  return (
    <div className={styles.navbar}>
      <div className={styles['navbar__inline-container']}>
        <div className={styles.navbar__logo}>
          <h2 title="Go home">
            <Link to={ROOT}>
              Talkish
            </Link>
          </h2>
        </div>
        <div className={styles['right-options-wrapper']}>
          <FontAwesomeIcon
            icon={faSearch}
            className={styles.icon}
          />
          <FontAwesomeIcon
            icon={faBookmark}
            className={styles.icon}
          />
          <FontAwesomeIcon
            icon={faBell}
            className={styles.icon}
          />
          <CButton
            rounded
            onClick={saveStoryContent}
          >
            Publish
          </CButton>
        </div>
      </div>
    </div>
  );
}
