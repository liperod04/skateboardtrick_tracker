import "./TrickTracker.css";
import { trickStance } from "/src/data/StanceData.js";
import { trickOptions } from "/src/data/TrickData.js";
import { trickRotation } from "/src/data/RotationData.js";
import { trickDirection } from "/src/data/DirectionData.js";

function TrickTracker() {
  const listStances = trickStance.map((stance) => <li>{stance.name}</li>);
  const listTricks = trickOptions.map((trick) => <li>{trick.name}</li>);
  const listRotations = trickRotation.map((rotation) => (
    <li>{rotation.name}</li>
  ));
  const listDirections = trickDirection.map((direction) => (
    <li>{direction.name}</li>
  ));
  return (
    <div className="tracker-container">
      <div className="lists-wrapper">
        <ul className="stance-list">{listStances}</ul>
        <ul className="direction-list">{listDirections}</ul>
        <ul className="rotation-list">{listRotations}</ul>
        <ul className="trick-list">{listTricks}</ul>
      </div>
    </div>
  );
}

export default TrickTracker;
