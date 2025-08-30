import React, { useState, useEffect, forwardRef } from "react";

const ResizableWrapper = forwardRef(
  (
    {
      element,
      children,
      updateElement,
      isSelected,
      dragStyle,
      listeners,
      attributes,
      onSelect,
    },
    ref
  ) => {
    const [isResizing, setIsResizing] = useState(false);

    const handleMouseDown = (e) => {
      e.stopPropagation();
      setIsResizing(true);
    };

    const handleMouseMove = (e) => {
      if (!isResizing) return;

      const newWidth = Math.max(40, e.clientX - element.x);
      const newHeight = Math.max(30, e.clientY - element.y);

      updateElement(element.id, {
        ...element,
        width: newWidth,
        height: newHeight,
      });
    };

    const handleMouseUp = () => setIsResizing(false);

    useEffect(() => {
      if (isResizing) {
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
      } else {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      }
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
      };
    }, [isResizing]);

    return (
      <div
        ref={ref}
        style={{
          position: "absolute",
          left: element.x,
          top: element.y,
          width: element.width,
          height: element.height,
          ...dragStyle,
        }}
        {...listeners}
        {...attributes}
        onClick={onSelect}
        className={`relative ${
          isSelected ? "ring-2 ring-blue-500" : ""
        } cursor-move`}
      >
        <div className="w-full h-full flex items-center justify-center">
          {children}
        </div>

        {isSelected && (
          <div
            onMouseDown={handleMouseDown}
            className="absolute w-3 h-3 bg-blue-500 bottom-0 right-0 cursor-se-resize"
          />
        )}
      </div>
    );
  }
);

export default ResizableWrapper;
