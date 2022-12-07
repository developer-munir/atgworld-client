import React from "react";
import ArticleUi from "../ArticleUi/ArticleUi";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="my-3 w-75 mx-auto">
        <ArticleUi></ArticleUi>
      </div>
    </div>
  );
};

export default Home;
