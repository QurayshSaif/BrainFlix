import "./App.scss";
import VideoDetails from "./data/video-details.json";

import Header from "./components/Header/header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  return (
    <>
      <Header />
      <VideoPlayer image={VideoDetails[0].image} />
    </>
  );
}

export default App;
