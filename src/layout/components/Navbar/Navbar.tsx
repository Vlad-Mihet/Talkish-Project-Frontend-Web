import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faBell, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Paths } from '../../../routes';
import { CButton } from '../../../components';
import styles from './navbar.module.scss';

const {
  ROOT,
  WRITE_STORY,
} = Paths;

export default function Navbar() {
  const navigate = useNavigate();

  const goToWriteNewStory = () => navigate(ROOT + WRITE_STORY);

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
          <CButton
            rounded
            onClick={goToWriteNewStory}
          >
            Write
          </CButton>
        </div>
      </div>
    </div>
  );
}
