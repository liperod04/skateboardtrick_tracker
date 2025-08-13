import { Link } from "react-router-dom";
import "/src/components/TrickTracker.jsx";
import "./TrackerPage.css";
import TrickTracker from "../components/TrickTracker";

function TrackerPage() {
  return (
    <div className="page-container">
      <h1 className="header-wrapper">
        <span className="title"> TrickTracker</span>
        <span className="user-logged"> Filipe Is Logged in</span>
      </h1>
      <div className="streak-container">
        <h5 className="streak">Your current streak is 50</h5>
      </div>
      <TrickTracker></TrickTracker>
    </div>
  );
}

export default TrackerPage;
