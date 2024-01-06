import ComingSoon from "@/components/ComingSoon";
import Layout from "@/components/Layout";
import React from "react";

const FindALocation = () => {
  return (
    <Layout showHero={false} showDownloadApp={false}>
      <section className="mt-[10vh]">
        <ComingSoon />
      </section>
    </Layout>
  );
};

export default FindALocation;
