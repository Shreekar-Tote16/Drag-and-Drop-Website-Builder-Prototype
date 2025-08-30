import React, { useState } from "react";
import { DndContext } from "@dnd-kit/core";
import Palette from "./Components/Palette";
import Canvas from "./Components/Canvas";
import PropertiesPanel from "./Components/PropertiesPanel";
import Navbar from "./Components/Navbar";
import WebsiteForm from "./Components/WebsiteForm";

function App() {
  const [elements, setElements] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [showBuilder, setShowBuilder] = useState(false);
  const [formData, setFormData] = useState(null);

  const handleDragEnd = (event) => {
    const { over, active, delta } = event;

    if (over && over.id === "canvas" && !elements.find((el) => el.id === active.id)) {
      let defaultContent = "";
      switch (active.id) {
        case "text":
          defaultContent = "Add Text";
          break;
        case "button":
          defaultContent = "New Button";
          break;
        case "circle":
          defaultContent = "Circle";
          break;
        case "rectangle":
          defaultContent = "Rectangle";
          break;
        case "square":
          defaultContent = "Square";
          break;
        default:
          defaultContent = "Element";
      }
      const newElement = {
        id: Date.now().toString(),
        type: active.id,
        content: defaultContent,
        x: 50,
        y: 50,
        width: 120,
        height: 60,
      };
      setElements((prev) => [...prev, newElement]);
    }

    if (elements.find((el) => el.id === active.id)) {
      setElements((prev) =>
        prev.map((el) =>
          el.id === active.id
            ? { ...el, x: (el.x || 0) + delta.x, y: (el.y || 0) + delta.y }
            : el
        )
      );
    }
  };

  const updateElement = (id, updates) => {
    setElements((prev) =>
      prev.map((el) => (el.id === id ? { ...el, ...updates } : el))
    );
  };

  const deleteElement = (id) => {
    setElements((prev) => prev.filter((el) => el.id !== id));
    setSelectedId(null);
  };

  const bringForward = (id) => {
    setElements((prev) => {
      const idx = prev.findIndex((el) => el.id === id);
      if (idx < prev.length - 1) {
        const newArr = [...prev];
        [newArr[idx], newArr[idx + 1]] = [newArr[idx + 1], newArr[idx]];
        return newArr;
      }
      return prev;
    });
  };

  const sendBackward = (id) => {
    setElements((prev) => {
      const idx = prev.findIndex((el) => el.id === id);
      if (idx > 0) {
        const newArr = [...prev];
        [newArr[idx], newArr[idx - 1]] = [newArr[idx - 1], newArr[idx]];
        return newArr;
      }
      return prev;
    });
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    setShowBuilder(true);
  };

  return (
    <>
      <Navbar projectName={formData?.websiteName} />

      {!showBuilder ? (
        <WebsiteForm onSubmit={handleFormSubmit} />
      ) : (
        <DndContext onDragEnd={handleDragEnd}>
          <div className="h-screen flex flex-col">
            <div className="flex flex-col md:flex-row flex-1">
              <div className="md:w-1/4 w-full bg-purple-200 p-4 shadow">
                <Palette />
              </div>

              <div className="flex-1 bg-purple-200 flex items-center justify-center">
                <Canvas
                  elements={elements}
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
                  updateElement={updateElement}
                />
              </div>

              <div className="md:w-1/4 w-full bg-purple-200 p-4 shadow">
                <PropertiesPanel
                  selectedElement={elements.find((el) => el.id === selectedId)}
                  updateElement={updateElement}
                  deleteElement={deleteElement}
                  bringForward={bringForward}
                  sendBackward={sendBackward}
                />
              </div>
            </div>
          </div>
        </DndContext>
      )}
    </>
  );
}

export default App;
