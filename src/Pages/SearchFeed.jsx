import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Videos from "../Components/Videos";
import { fetchFromAPI } from "../utilis/fetchFromApi";

const SearchFeed = () => {
  const [videos, setvideos] = useState(null);
  const { searchTerm } = useParams();
  
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setvideos(data.items)
    );
  }, [searchTerm]);

  return (
    <div>
      <div className=" w-full h-auto  px-2 ">
        <h1 className=" px-1 lg:text-2xl font-bold lg:px-16 my-5">
          {" "}
          Search Results for :{" "}
          <span className="text-[#FC1503]">{searchTerm}</span> videos
        </h1>
        <div className=" w-full px-1 lg:px-10  text-white">
          <Videos videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default SearchFeed;
