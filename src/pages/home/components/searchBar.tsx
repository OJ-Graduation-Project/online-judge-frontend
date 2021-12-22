import { BsSearch } from "react-icons/bs";
import styles from "../../home/styles.module.css";

const SearchBar = () => (
  <div className={styles["inputWithButton"]}>
    <form action="/" method="get">
      <input
        type="text"
        placeholder="Search Problems by id, name or tag"
        name="s"
      />
      <button type="submit">
        <BsSearch />
      </button>
    </form>
  </div>
);

export default SearchBar;
