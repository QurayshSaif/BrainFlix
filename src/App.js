import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage/UploadPage";
import VideoPage from "./pages/VideoPage/VideoPage";
import { useState } from "react";
import axios from "axios";
import Header from "./components/Header/header";
import { API_URL } from "./utils/api";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

function App() {
  const [videos, setVideos] = useState([]);

  axios
    .get(`${API_URL}`)
    .then((result) => {
      setVideos(result.data);
    })
    .catch((error) => console.error(error));

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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
