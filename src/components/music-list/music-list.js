import { useState } from "react";

import MusicListItem from "../music-list-item/music-list-item";
import "./music-list.css";

const MusicList = (props) => {
  const [opened, setOpened] = useState("");
  if (!props.songsList?.results) {
    return null;
  }

  const setOpenHandler = (idx) => {
    idx === opened ? setOpened("") : setOpened(idx);
  };

  return (
    <div className="music-list-container">
      {props.songsList.results.map((item, idx) => (
        <MusicListItem
          item={item}
          key={item.trackId}
          open={opened === idx}
          onOpenClick={() => setOpenHandler(idx)}
        />
      ))}
    </div>
  );
};

export default MusicList;
