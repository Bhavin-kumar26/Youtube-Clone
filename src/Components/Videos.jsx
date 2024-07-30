import React from "react";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading..";
  return (
    <div
      className={` ${
        direction
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-full  "
          : "grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4  md:grid-cols-3"
      }  place-items-center gap-5`}
    >
      {videos.map((video, index) => {
        return video?.id?.videoId ?? video?.id?.channelId ? (
          <div key={index}>
            {video?.id?.videoId && <VideoCard video={video} />}
            {video?.id?.channelId && <ChannelCard channelData={video} />}
          </div>
        ) : null;
      })}
    </div>
  );
};

export default Videos;
