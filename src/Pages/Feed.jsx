import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";
import { fetchFromAPI } from "../utilis/fetchFromApi";
import Videos from "../Components/Videos";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setvideos] = useState(null);
 
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setvideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <div className=" w-full h-auto flex flex-col lg:flex-row px-2 ">
      <div className=" w-full lg:w-[15%]">
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <div className=" w-full lg:w-[85%]  text-white">
        <Videos videos={videos}/>
      </div>
    </div>
  );
};

export default Feed;
