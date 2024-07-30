import React from "react";
import { categories } from "../utilis/Constants";
const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
 
  return (
    <div className=" flex lg:flex-col overflow-x-auto ">
      {categories.map((items, index) => (
        <div
        onClick={()=>setSelectedCategory(items.name)}
          key={index}
          className={` ${
            items.name === selectedCategory ? "bg-[#FC1503] " : ""
          } my-1  cursor-pointer gap-5 hover:bg-[#FC1503] w-[90%] px-4 py-2 rounded-md flex justify-start items-center text-xl`}
        >
          <span>
            <items.icon />
          </span>
          <button>{items.name}</button>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
