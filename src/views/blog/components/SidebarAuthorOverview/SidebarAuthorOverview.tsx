import { CAvatar, CButton } from '../../../../components';
import styles from './sidebarAuthorOverview.module.scss';
import PropTypes from 'prop-types';
import { Endpoints } from '../../../../config';
import useFetchData from '../../../../hooks/useFetchData';

interface Props {
  authorId: number;
}

function SidebarAuthorOverview({
  authorId,
}: Props) {
  const fetchAuthorByIdUrl = `${Endpoints.ROOT}/${Endpoints.AUTHORS}/${authorId}?includeFollowers=true`;

  const { data: author, loading, error } = useFetchData(fetchAuthorByIdUrl);

  console.log(author);

  if (error) {
    console.error(error);
  }

  return (
    loading || !author || error
      ? (
        <p>Loading Author Data...</p>
      )
      : (
        <div className={styles['author-overview']}>
          <CAvatar
            avatarImageUrl={author.avatarImageUrl}
            userFirstName={author.firstName}
            userLastName={author.lastName}
            size="xl"
          />
          <div className={styles['author-info']}>
            <span className={styles['author-name']}>
              {`${author.firstName} ${author.lastName}`}
            </span>
            <span className={styles['author-followers-count']}>
              {author?.followers?.length
                ? `${author.followers.length} Followers`
                : 'This author doesn\'t have any followers yet.'}
            </span>
            <span className={styles['author-bio']}>
              {author?.bio || 'This author hasn\'t added a bio yet.'}
            </span>
          </div>
          <div className={styles['interaction-panel']}>
            <CButton
              rounded
              filled
            >
              <span>Follow</span>
            </CButton>
            {/*
              To do: Add Newsletter Subscription Option
            */}
          </div>
        </div>
      )
  );
}

SidebarAuthorOverview.propTypes = {
  authorId: PropTypes.number.isRequired,
};

export default SidebarAuthorOverview;
