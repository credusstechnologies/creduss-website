import Layout from "@/components/Layout";
import React from "react";

const CustomerStories = () => {
  return (
    <Layout
      heroBg={"/icons/stories-bg.png"}
      showSearchField={true}
      textContent={{
        subHeader: "TRAVELING AND EARNING STORIES",
        subHeaderFs: "4.25rem",
        specialWord: "STORIES",
        desc: "Subscribe to learn about new product features, the latest in technology, solutions, and updates.",
      }}>
      <div>
        <h1>COMING SOON!!!!</h1>
      </div>
    </Layout>
  );
};

export default CustomerStories;
