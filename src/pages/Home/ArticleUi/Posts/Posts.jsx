import React from "react";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <div className="row">
      <div className="col-8">
        <PostCard></PostCard>
      </div>
      <div className="col-4">location</div>
    </div>
  );
};

export default Posts;
