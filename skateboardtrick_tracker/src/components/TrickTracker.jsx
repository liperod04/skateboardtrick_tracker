import { useMemo, useState } from "react";
import { trickStance } from "/src/data/StanceData.js";
import { trickOptions } from "/src/data/TrickData.js";
import { trickRotation } from "/src/data/RotationData.js";
import { trickDirection } from "/src/data/DirectionData.js";
import "./TrickTracker.css";

const toMap = (arr) => Object.fromEntries(arr.map((o) => [o.id, o.name]));

function TrickTracker() {
  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      stanceId: 0,
      directionId: 0,
      rotation: 0,
      basicTrickId: 0,
      notes: "",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(items);
  // Creates a draft because you don't want your list to be deleted when you click edit

  // Stores dictionary or map objects into constant variables for easier look up
  const stanceById = useMemo(() => toMap(trickStance), []);
  const directionById = useMemo(() => toMap(trickDirection), []);
  const trickById = useMemo(() => toMap(trickOptions), []);

  const fullTrickName = (r) => {
    const parts = [
      stanceById[r.stanceId],
      r.directionId ? directionById[r.directionId] : null,
      r.rotation ? String(r.rotation) : null,
      trickById[r.baseTrickId],
    ].filter(Boolean);
    return parts.join(" ");
  };

  const startEdit = () => {
    setDraft(items.map((r) => ({ ...r })));
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setIsEditing(false);
  };

  const saveAll = () => {
    setItems(draft);
    setIsEditing(false);
  };

  const addRow = () => {
    const blank = {
      id: crypto.randomUUID(),
      stanceId: trickStance[0].id,
      directionId: trickDirection[0].id,
      rotation: trickRotation[0].id,
      basicTrickId: trickOptions[0].id,
      notes: "",
    };

    if (isEditing) {
      setDraft((prev) => [...prev, blank]);
    } else {
      setItems((prev) => [...prev, blank]);
    }
  };

  return (
    <div>
      <div className="toolbar">
        {!isEditing ? (
          <>
            <button onClick={startEdit}>Edit</button>
            <button onClick={addRow}>Add +</button>
          </>
        ) : (
          <>
            <button onClick={saveAll}>Save All</button>
            <button onClick={cancelEdit}>Cancel</button>
            <button onClick={addRow}>Add Trick</button>
          </>
        )}
      </div>
      {/* table will go here */}
      <div>Table Placeholder</div>
    </div>
  );
}

export default TrickTracker;
