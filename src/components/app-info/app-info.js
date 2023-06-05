import "./app-info.css";

const AppInfo = () => {
  return (
    <div className="app-info">
      <button>
        <b>Artist</b>
      </button>
      <button>
        <b>Track</b>
      </button>
      <button className="hidden">
        <b>Collection</b>
      </button>
      <button className="hidden">
        <b>Genre</b>
      </button>
    </div>
  );
};

export default AppInfo;
