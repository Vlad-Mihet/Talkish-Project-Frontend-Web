import PropTypes from 'prop-types';
import styles from './cavatar.module.scss';

// eslint-disable-next-line @typescript-eslint/naming-convention
enum AVATAR_SIZES {
  xs = 'extra-small',
  s = 'small',
  m = 'medium',
  l = 'large',
  xl = 'extra-large',
}

interface Props {
  avatarImageUrl?: string;
  userFirstName: string;
  userLastName: string;
  size: keyof typeof AVATAR_SIZES;
}

function CAvatar({
  avatarImageUrl,
  userFirstName,
  userLastName,
  size,
}: Props) {
  return (
    avatarImageUrl
      ? (
        <img
          className={`${styles.avatar} ${styles[AVATAR_SIZES[size]]}`}
          src={avatarImageUrl}
          alt={`${userFirstName} ${userLastName}'s user avatar`}
        />
      )
      : (
        <div className={`${styles.avatar} ${styles[AVATAR_SIZES[size]]}`}>
          <span>{userFirstName.charAt(0).toUpperCase()}</span>
          <span>{userLastName.charAt(0).toUpperCase()}</span>
        </div>
      )
  );
}

CAvatar.propTypes = {
  avatarImageUrl: PropTypes.string,
  userFirstName: PropTypes.string.isRequired,
  userLastName: PropTypes.string.isRequired,
  size: ({ size }: { size: keyof typeof AVATAR_SIZES }) => {
    if (!Object.keys(AVATAR_SIZES).includes(size)) {
      throw new Error('Invalid size');
    }
  },
};

CAvatar.defaultProps = {
  avatarImageUrl: undefined,
  size: 'm',
};

export default CAvatar;
