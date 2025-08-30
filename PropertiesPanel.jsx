import React from "react";

function PropertiesPanel({ selectedElement, updateElement, deleteElement, bringForward, sendBackward }) {
  if (!selectedElement) {
    return <div className="p-4 text-gray-500">Select an element to edit</div>;
  }

  const handleChange = (field, value) => {
    updateElement(selectedElement.id, {
      ...selectedElement,
      [field]: value,
    });
  };

  return (
    <div className="p-4 mt-12 w-[100%] border-l bg-[#7f20be] rounded-lg text-white">
      <h2 className="text-lg font-semibold mb-4">Properties</h2>

      <label className="block text-sm mb-1">Content</label>
      <input
        type="text"
        value={selectedElement.content || ""}
        onChange={(e) => handleChange("content", e.target.value)}
        className="w-full p-2 mb-4 border rounded text-black bg-white"
      />

      <label className="block text-sm mb-1">Text Color</label>
      <input
        type="color"
        value={selectedElement.textColor || "#000000"}
        onChange={(e) => handleChange("textColor", e.target.value)}
        className="w-full h-10 mb-4 p-1 rounded cursor-pointer"
      />

      <label className="block text-sm mb-1">Background Color</label>
      <input
        type="color"
        value={selectedElement.bgColor || "#ffffff"}
        onChange={(e) => handleChange("bgColor", e.target.value)}
        className="w-full h-10 mb-4 p-1 rounded cursor-pointer"
      />

      <label className="block text-sm mb-1">Border Color</label>
      <input
        type="color"
        value={selectedElement.borderColor || "#000000"}
        onChange={(e) => handleChange("borderColor", e.target.value)}
        className="w-full h-10 mb-4 p-1 rounded cursor-pointer"
      />

      <div className="flex space-x-2 mt-4">
        <button
          onClick={() => bringForward(selectedElement.id)}
          className="flex-1 bg-white text-black py-2 rounded hover:bg-blue-600"
        >
          Bring Forward
        </button>
        <button
          onClick={() => sendBackward(selectedElement.id)}
          className="flex-1 bg-white text-black py-2 rounded hover:bg-gray-600"
        >
          Send Backward
        </button>
      </div>

      <button
        onClick={() => deleteElement(selectedElement.id)}
        className="w-full bg-white text-black py-2 rounded mt-4 hover:bg-red-600"
      >
        Delete Element
      </button>
    </div>
  );
}

export default PropertiesPanel;
