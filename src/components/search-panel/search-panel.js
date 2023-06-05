import "./search-panel.css";
import searchIcon from "./search-icon.png";

const SearchPanel = (props) => {
  return (
    <div className="search-panel-wrapper">
      <div className="search-panel-item">
        <input
          type="text"
          className="form-control search-panel"
          placeholder="Find a music"
          onChange={props.handleSearchTextChange}
        />

        <img src={searchIcon} alt="searchIcon" />
      </div>
    </div>
  );
};

export default SearchPanel;
