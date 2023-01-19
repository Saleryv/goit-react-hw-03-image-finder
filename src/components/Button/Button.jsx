import PropTypes from 'prop-types';
import css from "../Button/Button.module.css"

export const Button = ({ onLoadMore }) => {
    return (
  <div className={css.btn}>
    <button type="button" className={css.Button} onClick={onLoadMore}>
    Load more
  </button>
  </div>
);
    };

Button.propTypes = {
  onLoadMore: PropTypes.func.isRequired,
};