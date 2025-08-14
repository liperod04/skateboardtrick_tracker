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
      rotationId: 0,
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
  const rotationById = useMemo(() => toMap(trickRotation), []);

  const fullTrickName = (r) => {
    const rotLabel = rotationById[r.rotationId];

    const parts = [
      stanceById[r.stanceId],
      r.directionId ? directionById[r.directionId] : null,
      rotLabel !== "0" ? rotLabel : null,
      trickById[r.basicTrickId],
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
      rotationId: trickRotation[0].id,
      basicTrickId: trickOptions[0].id,
      notes: "",
    };

    if (isEditing) {
      setDraft((prev) => [...prev, blank]);
    } else {
      setItems((prev) => [...prev, blank]);
    }
  };

  const onFieldChange = (rowId, field) => (e) => {
    const raw = e.target.value;
    const value = field.endsWith("Id") ? Number(raw) : raw;

    setDraft((prev) =>
      prev.map((r) => (r.id === rowId ? { ...r, [field]: value } : r))
    );
  };

  return (
    <div>
      <div
        className="toolbar"
        style={{ display: "flex", gap: 8, marginBottom: 12 }}
      >
        {!isEditing ? (
          <>
            <button type="button" onClick={startEdit}>
              Edit
            </button>
            <button type="button" onClick={addRow}>
              Add new +
            </button>
          </>
        ) : (
          <>
            <button type="button" onClick={saveAll}>
              Save all
            </button>
            <button type="button" onClick={cancelEdit}>
              Cancel
            </button>
            <button type="button" onClick={addRow}>
              Add Trick
            </button>
          </>
        )}
      </div>

      <table className="trick-table">
        <thead>
          <tr>
            <th>Stance</th>
            <th>Direction</th>
            <th>Rotation</th>
            <th>Name</th>
            <th>Trick Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {(isEditing ? draft : items).map((row) => (
            <tr key={row.id}>
              {isEditing ? (
                <>
                  <td>
                    <select
                      value={row.stanceId}
                      onChange={onFieldChange(row.id, "stanceId")}
                    >
                      {trickStance.map((o) => (
                        <option key={o.id} value={o.id}>
                          {o.name}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td>
                    <select
                      value={row.directionId}
                      onChange={onFieldChange(row.id, "directionId")}
                    >
                      {trickDirection.map((o) => (
                        <option key={o.id} value={o.id}>
                          {o.name}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td>
                    <select
                      value={row.rotationId}
                      onChange={onFieldChange(row.id, "rotationId")}
                    >
                      {trickRotation.map((o) => (
                        <option key={o.id} value={o.id}>
                          {o.name}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td>
                    <select
                      value={row.basicTrickId}
                      onChange={onFieldChange(row.id, "basicTrickId")}
                    >
                      {trickOptions.map((o) => (
                        <option key={o.id} value={o.id}>
                          {o.name}
                        </option>
                      ))}
                    </select>
                  </td>

                  <td>
                    <strong>{fullTrickName(row)}</strong>
                  </td>

                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        setDraft((prev) => prev.filter((r) => r.id !== row.id))
                      }
                    >
                      Delete
                    </button>
                  </td>
                </>
              ) : (
                <>
                  {/* READ MODE */}
                  <td>{stanceById[row.stanceId]}</td>
                  <td>{directionById[row.directionId]}</td>
                  <td>{rotationById[row.rotationId]}</td>
                  <td>{trickById[row.basicTrickId]}</td>
                  <td>
                    <strong>{fullTrickName(row)}</strong>
                  </td>
                  <td>
                    <button
                      type="button"
                      onClick={() =>
                        setItems((prev) => prev.filter((r) => r.id !== row.id))
                      }
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrickTracker;
