import React from "react";
import DraggableWrapper from "./DraggableWrapper";

const items = [
  { id: "text", type: "text", render: () => <div className="w-12 h-6 border border-gray-500 flex items-center justify-center text-xs">T</div> },
  { id: "button", type: "button", render: () => <div className="w-16 h-8 bg-gray-300 rounded-md flex items-center justify-center text-xs">Button</div> },
  { id: "box", type: "box", render: () => <div className="w-12 h-12 border-2 border-gray-500"></div> },
  { id: "rectangle", type: "shape", render: () => <div className="w-16 h-10 border-2 border-gray-500"></div> },
  { id: "circle", type: "shape", render: () => <div className="w-10 h-10 border-2 border-gray-500 rounded-full"></div> },
  { id: "line", type: "shape", render: () => <div className="w-16 h-0.5 bg-gray-500"></div> },
  { id: "divider", type: "shape", render: () => <div className="w-16 h-0.5 border-t border-dashed border-gray-500"></div> },
];

function Palette() {
  return (
    <div className="w-[100%] mt-10 border-r p-4 bg-[#7f20be] rounded-2xl text-white">
      <h2 className="font-semibold text-lg mb-4">Palette</h2>

      <div className="grid grid-cols-2 gap-3">
        
        <DraggableWrapper id="text">
          <div className="p-2 border h-12 rounded-md bg-white hover:bg-[#ac6fd4] hover:text-white text-black shadow-sm cursor-grab flex items-center justify-center">
            {items[0].render()}
          </div>
        </DraggableWrapper>
        <DraggableWrapper id="button">
          <div className="p-2 border h-12 rounded-md bg-white hover:bg-[#ac6fd4] hover:text-white text-black shadow-sm cursor-grab flex items-center justify-center">
            {items[1].render()}
          </div>
        </DraggableWrapper>

        <DraggableWrapper id="box">
          <div className="p-2 border h-16 rounded-md bg-white hover:bg-[#ac6fd4] hover:text-white text-black shadow-sm cursor-grab flex items-center justify-center">
            {items[2].render()}
          </div>
        </DraggableWrapper>
        <DraggableWrapper id="rectangle">
          <div className="p-2 border h-16 rounded-md bg-white hover:bg-[#ac6fd4] hover:text-white text-black shadow-sm cursor-grab flex items-center justify-center">
            {items[3].render()}
          </div>
        </DraggableWrapper>

        <DraggableWrapper id="circle">
          <div className="p-2 border rounded-md bg-white hover:bg-[#ac6fd4] hover:text-white text-black shadow-sm cursor-grab flex items-center justify-center">
            {items[4].render()}
          </div>
        </DraggableWrapper>
        <DraggableWrapper id="line">
          <div className="p-2 border h-6 rounded-md bg-white hover:bg-[#ac6fd4]  hover:text-white text-black shadow-sm cursor-grab flex items-center justify-center">
            {items[5].render()}
          </div>
        </DraggableWrapper>

       
        <div></div> 
        <DraggableWrapper id="divider">
          <div className="border h-6 rounded-md bg-white hover:bg-[#ac6fd4] -mt-9 hover:text-white text-black shadow-sm cursor-grab flex items-center  justify-center">
            {items[6].render()}
          </div>
        </DraggableWrapper>
      </div>
    </div>
  );
}

export default Palette;
