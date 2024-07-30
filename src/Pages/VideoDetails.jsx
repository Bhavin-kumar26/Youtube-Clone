import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Videos from "../Components/Videos";
import { fetchFromAPI } from "../utilis/fetchFromApi";
import ReactPlayer from "react-player";
import { AiOutlineLike } from "react-icons/ai";
import Comments from "../Components/Comments";

const VideoDetails = () => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);
  const [relatedVideoData, setRelatedVideoData] = useState(null);

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoData(data.items[0])
    );
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`).then(
      (data) => setRelatedVideoData(data.items)
    );
  }, [id]);

  if (!videoData?.snippet) return "Loading";

  // console.log(videoData);
  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoData;
  // console.log(videoData);
  return (
    <div className=" w-full flex flex-col lg:flex-row  gap-2  p-2">
      <div className=" flex flex-col gap-5 px-2">
        <div className=" w-full">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            className="react-player"
            controls
          />
        </div>
        <div className=" flex flex-col justify-between mt-5 gap-3">
          <div>
            <h1 className=" text-lg font-bold tracking-wide">{title}</h1>
          </div>
          <div className=" flex justify-between items-center gap-3">
            <Link
              to={`/channel/${channelId}`}
              className=" text-sm text-[#dcc4c4]"
            >
              {channelTitle}
            </Link>
            <div className=" flex justify-center items-center gap-3">
              <h3 className=" text-md text-[#dcc4c4]">
                {" "}
                {parseInt(viewCount).toLocaleString()} views
              </h3>
              <h3 className=" text-md text-[#dcc4c4] flex items-center gap-1">
                {" "}
                <AiOutlineLike /> {parseInt(likeCount).toLocaleString()}{" "}
              </h3>
            </div>
          </div>
        </div>

        <div className=" my-2">
          <Comments id={id} />
        </div>
      </div>

      <div className=" px-3 w-full  md:px-0 lg:px-1">
        <Videos videos={relatedVideoData} direction={true} />
      </div>
    </div>
  );
};

export default VideoDetails;
