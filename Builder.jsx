import React, { useState } from "react";
import { DndContext, useSensor, useSensors, PointerSensor, TouchSensor } from "@dnd-kit/core";
import Palette from "./Palette";
import Canvas from "./Canvas";
import PropertiesPanel from "./PropertiesPanel";

function Builder({ websiteData }) {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 5 } })
  );

  const updateElement = (id, newProps) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, ...newProps } : el))
    );
  };

  return (
    <DndContext sensors={sensors}>
      <div className="flex flex-1 overflow-hidden">
        {/* Palette Sidebar */}
        <div className="w-full md:w-[200px] bg-purple-700 text-white overflow-y-auto">
          <Palette />
        </div>

        {/* Canvas */}
        <div className="flex-1 bg-gray-700 flex items-center justify-center">
          <Canvas
            elements={elements}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
            updateElement={updateElement}
            setElements={setElements}
          />
        </div>

        {/* Properties Panel */}
        <div className="w-full md:w-[220px] bg-purple-700 text-white overflow-y-auto">
          <PropertiesPanel
            selectedElement={elements.find((el) => el.id === selectedId)}
            updateElement={updateElement}
          />
        </div>
      </div>
    </DndContext>
  );
}

export default Builder;
