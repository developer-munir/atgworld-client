import React from "react";
import ArticleNavbar from "./ArticleNavbar";
import Posts from "./Posts/Posts";

const ArticleUi = () => {
  return (
    <div>
      <div className="my-md-3">
        <ArticleNavbar></ArticleNavbar>
      </div>
      <div>
        <Posts></Posts>
      </div>
    </div>
  );
};

export default ArticleUi;
