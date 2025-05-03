import { IoSearch } from "react-icons/io5";
import styles from "./Search.module.css";

function Search({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search title"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
      />
      <button onClick={searchHandler}>
        <IoSearch />
      </button>
    </div>
  );
}

export default Search;
