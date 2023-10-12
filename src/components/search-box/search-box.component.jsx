import './search-box.styles.css';
import PropTypes from 'prop-types'

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);
SearchBox.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChangeHandler: PropTypes.func,
  };

export default SearchBox;