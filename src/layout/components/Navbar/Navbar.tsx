import styles from './navbar.module.scss';

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles['navbar__inline-container']}>
        <div className={styles.navbar__logo}>
          <h2>Talkish</h2>
        </div>
        <div className={styles['right-options-wrapper']}>
          {/*
            This section is dedicated towards basic commands and user avatar, alongside
            the dropdown that will be triggered by a click on the user's avatar
          */}

          {/* These will be replaced by icons and components from the external component library */}
          <span>Search</span>
          <span>Reading List</span>
          <span>Notifications</span>
          <button>Write</button>
          <div>User Avatar</div>
        </div>
      </div>
    </div>
  )
}
