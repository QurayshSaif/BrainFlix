import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/videos/:id" element={<VideoPage />} /> */}
        <Route path="/upload" element={<UploadPage />} />
        <Route path="*" element={<h1>404 ERROR</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
