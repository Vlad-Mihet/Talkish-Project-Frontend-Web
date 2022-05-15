import { CAvatar } from '../../../../components';
import PropTypes from 'prop-types';
import styles from './authorHeader.module.scss';
import { format } from 'date-fns';

interface Props {
  authorImageLink?: string;
  authorFirstName: string;
  authorLastName: string;
  articlePublishDate: string;
  articleReadingTime: number;
}

function AuthorHeader({
  authorImageLink,
  authorFirstName,
  authorLastName,
  articlePublishDate,
  articleReadingTime,
}: Props) {
  return (
    <div className={styles['author-header']}>
      <CAvatar
        avatarImageUrl={authorImageLink}
        userFirstName={authorFirstName}
        userLastName={authorLastName}
        key={`${authorFirstName} ${authorLastName}'s user avatar`}
      />
      <div className={styles['info-block']}>
        <span className={styles['author-name']}>
          {`${authorFirstName} ${authorLastName}`}
        </span>
        <div className={styles['blog-info']}>
          <span>
            {format(new Date(articlePublishDate), 'MMM dd, yyyy')}
          </span>
          <span className={styles.delimiter} />
          <span>
            {articleReadingTime}
            {' '}
            min read
          </span>
        </div>
      </div>
    </div>
  );
}

AuthorHeader.propTypes = {
  authorImageLink: PropTypes.string,
  authorFirstName: PropTypes.string.isRequired,
  authorLastName: PropTypes.string.isRequired,
  articlePublishDate: PropTypes.string.isRequired,
  articleReadingTime: PropTypes.number.isRequired,
};

AuthorHeader.defaultProps = {
  authorImageLink: '',
};

export default AuthorHeader;
