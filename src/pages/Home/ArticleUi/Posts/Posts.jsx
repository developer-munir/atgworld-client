import React from "react";
import Location from "./Location";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <div className="row">
      <div className="col-8">
        <PostCard></PostCard>
      </div>
      <div className="col-4">
        <Location></Location>
      </div>
    </div>
  );
};

export default Posts;
