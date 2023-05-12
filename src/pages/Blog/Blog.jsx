import React from "react";
import "./blog.scss";
import BlogHeader from "../../components/blog_header/BlogHeader";
import Footer from "../../components/footer/Footer";

const Blog = () => {
  return (
    <div className="blog_wrapper">
      <BlogHeader />
      <Footer />
    </div>
  );
};

export default Blog;
