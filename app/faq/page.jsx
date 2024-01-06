"use client";
import Accordion from "@/components/Accordion";
import Layout from "@/components/Layout";
import React from "react";

const FAQ = () => {
  return (
    <Layout heroBg={"/icons/faq-bg.png"}>
      <section className="">
        <Accordion />
      </section>
    </Layout>
  );
};

export default FAQ;
