import React from "react";
import Navbar from "./Components/Navbar";
import Feed from "./Pages/Feed";
import VideoDetails from "./Pages/VideoDetails";
import ChannelDetails from "./Pages/ChannelDetails";
import SearchFeed from "./Pages/SearchFeed";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <div className=" bg-black w-full text-white">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetails />} />
        <Route path="/channel/:id" element={<ChannelDetails />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </div>
  );
};

export default App;
