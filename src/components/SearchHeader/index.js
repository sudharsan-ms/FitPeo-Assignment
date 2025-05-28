import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import "./index.css"

const SearchHeader = () => {
  return (
    <div className="SearchHeaderContainer">
      <div>
        <FaSearch />
        <input type="search" />
      </div>
      <FaBell />
    </div>
  );
};

export default SearchHeader