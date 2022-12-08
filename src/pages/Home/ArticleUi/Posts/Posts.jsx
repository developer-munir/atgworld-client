import React from "react";
import Location from "./Location";
import PostCard from "./PostCard";

const Posts = () => {
  return (
    <div className="row">
      <div className="col- col-md-8">
        <PostCard></PostCard>
      </div>
      <div className="col- col-md-4 d-none d-md-block">
        <Location></Location>
      </div>
    </div>
  );
};

export default Posts;
