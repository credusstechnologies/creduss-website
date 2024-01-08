import React from "react";
import Image from "next/image";

const WhyCredussCards = () => {
  return (
    <section className="px-[15.5px]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-[32px]">
        {credussForLocalList.map((i) => (
          <div
            key={i.id}
            className="flex items-start bg-gray-50 p-[20px] gap-[27px] rounded-[21.66px] shadow border border-slate-800 border-opacity-5">
            <Image src={i.icon} alt="icon" width={32} height={32} />

            <div>
              <h2>{i.title}</h2>
              <p className="text-desc">{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyCredussCards;

export const credussForLocalList = [
  {
    id: "1",
    icon: "/icons/safety.svg",
    title: "Efficiency",
    desc: "We prioritize timely deliveries to ensure your packages reach their destination when you expect them.",
  },
  {
    id: "2",
    icon: "/icons/excellence.svg",
    title: "Reliability",
    desc: "Our network of trusted local couriers is committed to handling your items with care and professionalism.",
  },
  {
    id: "3",
    icon: "/icons/integrity.svg",
    title: "Real-Time Tracking",
    desc: "Our transparent tracking system keeps you informed throughout the entire delivery process, giving you peace of mind.",
  },
  {
    id: "4",
    icon: "/icons/support.svg",
    title: "Community-Centric",
    desc: "Creduss Local Operations foster connections within your community, making local deliveries more convenient and accessible.",
  },
];
