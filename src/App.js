import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage/UploadPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header/header";
import { API_URL, API_KEY } from "./utils/api";

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}?api_key=${API_KEY}`)
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
