import React from "react";
import { MdVerified } from "react-icons/md";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utilis/Constants";
import { Link } from "react-router-dom";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  // console.log(snippet);
  const handleClick = (id) => {
    // console.log(id);
  };
  return (
    <Link
      to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}
      className="  w-[15rem] rounded-xl h-auto mb-5"
    >
      <img
        onClick={() => handleClick(videoId)}
        className=" w-full h-[210px] object-cover  "
        src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        alt={snippet?.title}
      />
      <Link  to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} className=" font-medium text-[0.9rem] mb-2">
        {snippet.title.slice(0, 60)}...
      </Link>
      <div className=" flex items-center gap-1">
        <p className=" text-[#dcb6b6] text-[0.7rem] font-normal">
          {snippet.channelTitle}
        </p>
        <MdVerified className=" text-[0.7rem]" />
      </div>
    </Link>
  );
};

export default VideoCard;
