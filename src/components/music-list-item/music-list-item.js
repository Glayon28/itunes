import "./music-list-item.css";

const MusicListItem = (props) => {
  const item = props.item;

  function Duration(millis) {
    millis = item.trackTimeMillis;
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

  return (
    <div className="music-list-item-wrapper">
      <button className="music-list" onClick={props.onOpenClick}>
        <img src={item.artworkUrl100} alt={item.description} />
        <span>{item.artistName}</span>
        <span>{item.trackName}</span>
        <span>{item.collectionName}</span>
        <span>{item.primaryGenreName}</span>
        <button className="plus xs-hidden">
          <span className={`minus ${props.open ? "minus-hidden" : ""}`}></span>
        </button>
      </button>

      {!props.open ? null : (
        <div className="music-list-item-hidden">
          <div className="music-list-item-track">
            <span>
              {item.artistName} - {item.trackName} <span>&#9835;</span>
            </span>
          </div>
          <div className="music-list-item-info">
            <div>
              <span>
                <b>Collection:</b> {item.collectionName}
              </span>
              <span>
                <b>Track Count:</b> {item.trackCount}
              </span>
              <span>
                <b>Price:</b> {item.collectionPrice} USD
              </span>
            </div>
            <div>
              <span className="genre">
                <b>Genre:</b> {item.primaryGenreName}
              </span>
              <span>
                <b>Track Duration:</b> {Duration()} min
              </span>
              <span>
                <b>Track Price:</b> {item.trackPrice} USD
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MusicListItem;
