import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage/UploadPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/header";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=b1525f0b-9828-4377-bb48-efb4b801d035"
      )
      .then((result) => {
        setVideos(result.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage videos={videos} />} />
        <Route
          exact
          path="/videos/:id"
          element={<VideoPage videos={videos} />}
        />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="*" element={<h1>404 ERROR</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
