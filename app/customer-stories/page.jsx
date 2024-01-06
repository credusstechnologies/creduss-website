import ComingSoon from "@/components/ComingSoon";
import Layout from "@/components/Layout";
import React from "react";

const CustomerStories = () => {
  return (
    <Layout
      heroBg={"/icons/stories-bg.png"}
      showSearchField={true}
      textContent={{
        mainCaption: "traveling and earning stories",
        subCaption: "",
        specialWord: "stories",
        desc: "Subscribe to learn about new product features, the latest in technology, solutions, and updates.",
      }}>
      <ComingSoon />
    </Layout>
  );
};

export default CustomerStories;
