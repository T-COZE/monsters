/* eslint-disable react/prop-types */
import './search-box.styles.css';
// import PropTypes from 'prop-types'


interface ISearchBoxProps {
  classname: string;
  placeholder?: string;
}

interface ISearchBoxProps {
  onChangeHandler: (a: string) => void
}

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (a: string) => void;
}

//union
// type CanadianAddress = {
//   street: string;
//   province: string;
// }

// type USAddress = {
//   street: string;
//   state: string;
// }
// type NorthAmericanAddress = CanadianAddress | USAddress | can keep adding as long as the type is declared

// const Address: NorthAmericanAddress = {
//   street: 'america',
//   state: 'alaska',
//   province: 'yukon',
// }
// types are more for functional programming and interfaces are more for OOP like angular

const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);
// SearchBox.propTypes = {
//     className: PropTypes.string,
//     placeholder: PropTypes.string,
//     onChangeHandler: PropTypes.func,
//   };

export default SearchBox;