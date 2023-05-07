import React from "react";
import "./article.scss";
import ArticleWidget from "../article_widget/ArticleWidget";

const Article = () => {
  return (
    <div className="article_wrapper">
      <div className="article_item1">
        <div className="article_head_wrap">
          <p className="article_text1">
            - GAIN INSIGHTS THAT WILL SHIFT YOUR PARADIGMS
          </p>
          <h1 className="article_text2">Read | Watch | Listen | Experience</h1>
        </div>
        <button className="article_button">— View All News</button>
      </div>
      <div className="article_item2">
        <ArticleWidget
          img={
            "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/10/stewart-maclean-mT8E8qJGfmE-unsplash-300x300.jpg"
          }
          text1={"Stop Ignoring These 7 Inspiring Truths"}
          text2={"October 14, 2018"}
          key={0}
        />
        <ArticleWidget
          img={
            "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/10/daniel-j-schwarz-UCoUdQ5dFTU-unsplash-300x300.jpg"
          }
          text1={"How to be 1% Better Every Day"}
          text2={"October 14, 2018"}
          key={1}
        />
        <ArticleWidget
          img={
            "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/10/max-ovcharenko-LbBro6HtcSs-unsplash-300x300.jpg"
          }
          text1={"How To Become Ridiculously Self-Aware In 20 Minutes"}
          text2={"October 14, 2018"}
          key={2}
        />
        <ArticleWidget
          img={
            "https://themes.pixelwars.org/efor/demo-09/wp-content/uploads/sites/13/2018/09/holly-mandarich-duq_b5-unhw-unsplash-300x300.jpg"
          }
          text1={"What’s the Point of Self-Improvement Anyway?"}
          text2={"October 14, 2018"}
          key={3}
        />
      </div>
    </div>
  );
};

export default Article;
