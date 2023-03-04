import "./App.scss";
import VideoDetails from "./data/video-details.json";
import Videos from "./data/videos.json";

import Header from "./components/Header/header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import VideoList from "./components/VideoList/VideoList";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer image={Videos[0].image} />
      <VideoList />
    </>
  );
}

export default App;
