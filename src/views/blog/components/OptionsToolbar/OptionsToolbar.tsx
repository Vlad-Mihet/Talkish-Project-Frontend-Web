import styles from './optionsToolbar.module.scss';
import PropTypes from 'prop-types';

interface Props {
  isAtEndOfArticle: boolean;
}

export default function OptionsToolbar({
  isAtEndOfArticle,
}: Props) {
  return (
    <div
      className={`${styles['options-toolbar']} ${!isAtEndOfArticle ? styles['is-floating'] : ''}`}
    >
      <div className={styles['story-interaction-options']}>
        <div className={styles['like-option-wrapper']} />
        <div className={styles['comment-option-wrapper']} />
      </div>
      <div className={styles['story-share-options']} />
    </div>
  );
}

OptionsToolbar.propTypes = {
  isAtEndOfArticle: PropTypes.bool.isRequired,
};
