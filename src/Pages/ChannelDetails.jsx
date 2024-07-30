import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ChannelCard from "../Components/ChannelCard";
import Videos from "../Components/Videos";
import { fetchFromAPI } from "../utilis/fetchFromApi";

const ChannelDetails = () => {
  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState();
  const [videos, setVideos] = useState();
// console.log(channelDetails);
  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
      setChannelDetails(data?.items[0]);

      const videosData = await fetchFromAPI(
        `search?channelId=${id}&part=snippet%2Cid&order=date`
      );

      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);

  return (
    <div className=" w-full">
      <div className="Profile-b w-full  h-[250px]">
        <img
          className=" w-full h-full object-cover"
          src={channelDetails?.brandingSettings?.image?.bannerExternalUrl}
          alt="banner"
        />
      </div>
      <div className="flex justify-center -mt-14">
        <ChannelCard channelData={channelDetails} />
      </div>
      <div className=" px-3 lg:px-10 mt-10">
        <Videos videos={videos} />
      </div>
    </div>
  );
};

export default ChannelDetails;
