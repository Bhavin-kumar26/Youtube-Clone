import React from "react";
import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "../utilis/Constants";

const ChannelCard = ({ channelData }) => {
  return (
    <Link
      to={`/channel/${channelData?.id?.channelId}`}
      className=" w-[14rem] flex flex-col justify-center items-center gap-1  "
    >
      <img
        className=" w-[70%] rounded-full"
        src={channelData?.snippet?.thumbnails?.high?.url ?? demoProfilePicture}
        alt=""
      />
      <div className=" flex items-center gap-1">
        <p className=" font-semibold tracking-widest text-[1.2rem]">
          {channelData?.snippet?.title}
        </p>
        <MdVerified className=" text-[0.8rem]" />
      </div>
      <div className=" flex flex-col justify-center items-center">
        {channelData?.statistics?.subscriberCount && (
          <h1 className=" mt-1 text-sm text-[#c7b7b7]">
            {parseInt(channelData?.statistics?.subscriberCount).toLocaleString(
              "en-US"
            )}{" "}
            Subscribers
          </h1>
        )}
        {channelData?.statistics?.videoCount && (
          <h1 className=" mt-1 text-sm text-[#c7b7b7]">
            {parseInt(channelData?.statistics?.videoCount).toLocaleString(
              "en-US"
            )}{" "}
            Videos
          </h1>
        )}
      </div>
    </Link>
  );
};

export default ChannelCard;
