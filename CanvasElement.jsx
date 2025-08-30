import React from "react";
import { Rnd } from "react-rnd";
import ElementRenderer from "./ElementRenderer";

function CanvasElement({ element, selectedId, setSelectedId, updateElement }) {
  const isSelected = selectedId === element.id;

  // Determine border style
  const borderStyle = isSelected ? "2px dotted #4f46e5" : "none";
  const borderRadius = element.type === "circle" ? "50%" : "0";

  return (
    <Rnd
      size={{ width: element.width, height: element.height }}
      position={{ x: element.x, y: element.y }}
      onDragStop={(e, d) =>
        updateElement(element.id, { ...element, x: d.x, y: d.y })
      }
      onResizeStop={(e, direction, ref, delta, position) =>
        updateElement(element.id, {
          ...element,
          width: parseInt(ref.style.width, 10),
          height: parseInt(ref.style.height, 10),
          ...position,
        })
      }
      bounds="parent"
      onClick={() => setSelectedId(element.id)}
      style={{
        border: borderStyle,
        borderRadius: borderRadius,
      }}
    >
      <ElementRenderer element={element} />
    </Rnd>
  );
}

export default CanvasElement;
