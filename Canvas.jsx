import React from "react";
import { useDroppable } from "@dnd-kit/core";
import CanvasElement from "./CanvasElement";

function Canvas({ elements, selectedId, setSelectedId, updateElement }) {
  const { isOver, setNodeRef } = useDroppable({ id: "canvas" });

  return (
    <div
      ref={setNodeRef}
      className={`relative flex-1 border-2 m-2 rounded p-4 min-h-[960px] -mt-0.5 ${
        isOver ? "bg-blue-50" : "bg-white"
      }`}
    >
      {elements.length === 0 && (
        <p className="text-gray-700">Drag elements here...</p>
      )}

      {elements.map((el) => (
        <CanvasElement
          key={el.id}
          element={el}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          updateElement={updateElement}
        />
      ))}
    </div>
  );
}

export default Canvas;
