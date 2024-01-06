import ComingSoon from "@/components/ComingSoon";
import Layout from "@/components/Layout";
import React from "react";

const Blog = () => {
  return (
    <Layout
      heroBg={"/icons/blog-bg.png"}
      bgPosition="right"
      bgSize="contain"
      showSearchField={true}
      contents={{
        caption: "crazy stories and ideas - our blog",
        desc: "Subscribe to learn about new product features, the latest in technology, solutions, and updates.",
        // h1: "crazy stories",
        uniqueWord: "stories",
      }}>
      <ComingSoon />
    </Layout>
  );
};

export default Blog;
