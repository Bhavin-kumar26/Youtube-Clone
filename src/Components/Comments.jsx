import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utilis/fetchFromApi";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";

const Comments = ({ id }) => {
  const [comments, setComments] = useState([]);
  const [commentsToggle, setCommentsToggle] = useState(false);
  useEffect(() => {
    fetchFromAPI(`commentThreads?part=snippet&videoId=${id}`).then((data) => {
      const sortedComments = data.items.sort((a, b) => {
        return (
          b.snippet.topLevelComment.snippet.likeCount -
          a.snippet.topLevelComment.snippet.likeCount
        );
      });
      setComments(sortedComments);
    });
  }, [id]);

  if (!setComments?.length) return "Loading";

  return (
    <div className=" h-auto w-full  ">
      {commentsToggle ? (
        <div className="bg-[#272727] p-1 rounded-md ">
          <h1 onClick={()=>setCommentsToggle(!commentsToggle)} className=" text-xl font-bold mb-2">Comments :</h1>
          <div className=" flex flex-col gap-3">
            {comments.slice(1, 20).map((comment) => (
              <div>
                <div className=" flex items-start gap-4">
                  <img
                    className=" rounded-full w-9"
                    src={
                      comment?.snippet?.topLevelComment?.snippet
                        ?.authorProfileImageUrl
                    }
                    alt=""
                  />
                  <div>
                    <h2 className=" font-extralight">
                      {(comment?.snippet?.topLevelComment?.snippet?.authorDisplayName).slice(
                        0,
                        20
                      )}
                    </h2>
                    <h2 className=" mt-1 text-sm">
                      {(comment?.snippet?.topLevelComment?.snippet?.textOriginal).slice(
                        0,
                        60
                      )}
                      ...
                    </h2>
                    <div className=" flex items-center gap-4 mt-1">
                      <h2 className=" flex items-center gap-1">
                        <AiOutlineLike />
                        {comment?.snippet?.topLevelComment?.snippet?.likeCount}
                      </h2>
                      <AiOutlineDislike />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div onClick={()=>setCommentsToggle(!commentsToggle)} className=" bg-[#272727] p-1 rounded-md">
          <h1>Comments</h1>
        </div>
      )}
    </div>
  );
};

export default Comments;
