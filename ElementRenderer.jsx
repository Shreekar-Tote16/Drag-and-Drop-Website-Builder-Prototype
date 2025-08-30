import React from "react";

function ElementRenderer({ element }) {
  // Base style
  const baseStyle = {
    width: element.width,
    height: element.height,
    color: element.textColor || "#000000",
    backgroundColor: element.bgColor || "transparent",
    border:
      element.borderColor
        ? `2px solid ${element.borderColor}`
        : element.type === "text" // 👈 Default border for text
        ? "1px dashed #555"
        : "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  switch (element.type) {
    case "text":
      return (
        <div
          style={baseStyle}
          className="p-2 flex items-center justify-center"
        >
          {element.content || "Sample Text"}
        </div>
      );

    case "button":
      return (
        <button
          style={baseStyle}
          className="rounded shadow px-4 py-2"
        >
          {element.content || "Button"}
        </button>
      );

    case "box":
      return <div style={baseStyle}>{element.content || ""}</div>;

    case "rectangle":
      return (
        <div
          style={baseStyle}
          className="rounded-md"
        >
          {element.content || ""}
        </div>
      );

    case "circle":
      return (
        <div
          style={{
            ...baseStyle,
            borderRadius: "50%",
          }}
        >
          {element.content || ""}
        </div>
      );

    case "line":
      return (
        <div
          style={{
            width: element.width,
            height: 2,
            backgroundColor: element.borderColor || "#666",
          }}
        />
      );

    case "divider":
      return (
        <hr
          style={{
            width: element.width,
            borderTop: `2px solid ${element.borderColor || "#999"}`,
          }}
        />
      );

    default:
      return null;
  }
}

export default ElementRenderer;
