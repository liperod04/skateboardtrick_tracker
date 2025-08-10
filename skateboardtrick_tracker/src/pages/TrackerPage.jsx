import { Link } from "react-router-dom";
// import "./components/TrickTracker.jsx";
import "./TrackerPage.css";

function TrackerPage() {
  return (
    <div className="page-wrapper">
      <header className="header-container">
        <span className="title"> TrickTracker</span>
        <span className="user-logged"> Filipe Is Logged in</span>
      </header>
      <div className="streak-container">
        <h5 className="streak">Your current streak is 50</h5>
      </div>
    </div>
  );
}

export default TrackerPage;
