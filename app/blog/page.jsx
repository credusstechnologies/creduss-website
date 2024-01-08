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
        mainCaption: "crazy stories and ideas - our blog",
        subCaption: {
          text: "",
          specialWord: "stories",
        },
        desc: "Subscribe to learn about new product features, the latest in technology, solutions, and updates.",
      }}>
      <ComingSoon />
    </Layout>
  );
};

export default Blog;
