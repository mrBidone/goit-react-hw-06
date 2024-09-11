import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ filterValue, handleFilter }) => {
  const searchInputID = useId();

  return (
    <>
      <label className={css.searchLabel} htmlFor={searchInputID}>
        Find contacts by name
      </label>
      <input
        className={css.searchInput}
        id={searchInputID}
        type="text"
        name="searchInput"
        placeholder="Enter contact name"
        value={filterValue}
        onChange={handleFilter}
      />
    </>
  );
};

export default SearchBox;
