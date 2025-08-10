import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TrackerPage from "./pages/TrackerPage";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trackerpage" element={<TrackerPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

export default App;
