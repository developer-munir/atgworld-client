import React from "react";
import ArticleUi from "../ArticleUi/ArticleUi";
import Banner from "../Banner/Banner";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-3 px-md-2 article-ui ">
        <ArticleUi></ArticleUi>
      </div>
    </div>
  );
};

export default Home;
