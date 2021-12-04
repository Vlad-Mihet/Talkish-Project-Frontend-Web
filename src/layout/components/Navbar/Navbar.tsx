import styles from './navbar.module.scss';
import { CButton } from '../../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";
import { Paths } from '../../../routes';

const {
  ROOT,
  WRITE_STORY
} = Paths;

const goToWriteNewStoryUrl = ROOT + WRITE_STORY;

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles['navbar__inline-container']}>
        <div className={styles.navbar__logo}>
          <h2>Talkish</h2>
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
          <CButton rounded >
            <Link to={goToWriteNewStoryUrl}>
              Write
            </Link>
          </CButton>
        </div>
      </div>
    </div>
  )
}
