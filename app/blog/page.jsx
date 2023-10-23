import Layout from "@/components/Layout";
import React from "react";

const Blog = () => {
  return (
    <Layout
      heroBg={"/icons/blog-bg.png"}
      bgPosition="right"
      bgSize="contain"
      showSearchField={true}
      textContent={{
        subHeader: "CRAZY STORIES AND IDEAS - OUR BLOG",
        subHeaderFs: "4.5rem",
        specialWord: "STORIES",
        desc: "Subscribe to learn about new product features, the latest in technology, solutions, and updates.",
      }}>
      <div>
        <h1>COMING SOON!!!!</h1>
      </div>
    </Layout>
  );
};

export default Blog;
