import SearchPanel from "../search-panel/search-panel";
import AppInfo from "../app-info/app-info";
import React, { useEffect, useState } from "react";
import MusicList from "../music-list/music-list";

function HomePage() {
  const [songs, setSongs] = useState([]);
  const [search, setSearch] = useState("");

  async function itunesApiRequest(term, media = "all") {
    const url = new URL("https://itunes.apple.com/search");
    const params = {
      country: "FR",
      lang: "en_us",
      limit: 50,
      term,
      media,
    };
    try {
      url.search = new URLSearchParams(params);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setSongs(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const timeOutId = setTimeout(() => itunesApiRequest(search), 500);
    return () => clearTimeout(timeOutId);
  }, [search]);

  return (
    <div className="app">
      <SearchPanel
        search={search}
        handleSearchTextChange={(e) => setSearch(e.target.value)}
      />
      <AppInfo />
      <MusicList songsList={songs} />
    </div>
  );
}

export default HomePage;
