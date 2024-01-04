"use client";

import Layout from "@/components/Layout";
import Image from "next/image";

import Map from "../public/icons/map.png";
import FeaturesImg from "../public/icons/features.png";
import Button from "@/components/Button";
import WhyCredussSwiper from "@/components/WhyCredussSwiper";
import TestimonialsSwiper from "@/components/TestimonialsSwiper";
import Accordion from "@/components/Accordion";

export default function Home() {
  return (
    <Layout
      showHeroImg={true}
      linearGradient={
        "linear-gradient(170deg, rgba(16, 19, 35, 0.00) 6.17%, #101323 70.13%)"
      }>
      <main className="home">
        <section className=" md:pt-15 pt-10 ">
          <section className="md:px-20 px-10 md:w-[60%] md:pr-1">
            <h6 className="text-warning-400">Our Achievements</h6>
            <h1 className="md:leading-[4rem] leading-[2.5rem] font-bold text-[1.875rem] md:text-[3.75rem] mb-2 text-secondary">
              We manage logistics from all over the world
            </h1>
            <p className="text-desc">
              Have a passion for exploring new horizons? With Creduss, your
              travels can be more than just a journey – they can be an
              opportunity. Become a courier on your trips and earn.
            </p>
          </section>

          <section className="md:px-20 px-10 md:flex md:items-center md:justify-between mt-5">
            <div className="grid grid-cols-2 gap-y-4 gap-x-2 md:w-[50%]">
              {achievementList.map((achievement) => (
                <Achievement
                  key={achievement.id}
                  counts={achievement.counts}
                  title={achievement.title}
                  desc={achievement.desc}
                />
              ))}
            </div>

            <div>
              <Image className="block" src={Map} alt="map" />
            </div>
          </section>

          <section className="md:px-20 px-10 py-10 flex flex-col-reverse md:items-center md:flex-row md:justify-between bg-[#f0f9ff">
            <div className="md:w-[45%] mt-4 md:mt-0">
              <h6 className="text-warning-400">Unique features</h6>
              <h1 className="md:leading-[4rem] leading-[2.5rem] font-bold text-[1.875rem] md:text-[3.75rem] mb-2 text-secondary">
                You can send and deliver anything
              </h1>
              <p className="mt-3 mb-3 text-desc">
                Have a passion for exploring new horizons? With Creduss, your
                travels can be more than just a journey – they can be an
                opportunity. Become a courier on your trips and earn.
              </p>
              <Button twStyles="px-7 py-4 text-white" />
            </div>

            <div className="">
              <Image src={FeaturesImg} alt="features img" />
            </div>
          </section>

          <section className="bg-secondary py-10 text-white why-creduss-wrapper">
            <h1 className="md:text-[3.75rem] font-[700] text-center mb-5">
              Why Creduss?
            </h1>

            <WhyCredussSwiper />
          </section>

          <section className="py-10 px-10 md:px-20">
            <h1 className="md:text-[3.75rem] font-[700] text-center mb-5 text-secondary">
              How Creduss Works
            </h1>

            <div className="grid md:grid-cols-2 gap-10">
              {howCredussWork.map((i) => (
                <div key={i.id} className="flex items-start gap-5">
                  {/* <div
                    style={{
                      width: "32px",
                      height: "32px",
                    }}
                    className="">

                  </div> */}
                  <Image src={i.icon} alt="icon" width={32} height={32} />

                  <div>
                    <h2 className="font-bold p-0 m-0">{i.title}</h2>
                    <p className="text-desc">{i.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-warning-400 md:py-10 pt-10 ">
            <h6 className="text-secondary text-center">Testimonials</h6>
            <h1 className="text-center md:leading-[4rem] leading-[2.5rem] font-bold text-[1.875rem] md:text-[3.75rem] mb-10 mt-5 text-white md:w-[80%] m-auto">
              Our customers have something to say to you
            </h1>

            <TestimonialsSwiper />
          </section>

          <section className="px-10 md:px-20">
            <Accordion />
          </section>
        </section>
      </main>
    </Layout>
  );
}

export const Achievement = ({ counts, title, desc }) => {
  return (
    <div>
      <h1 className="md:text-[2.25rem] text-[1.5rem] font-bold text-warning-400">
        {counts}
      </h1>
      <h3 className="font-bold text-secondary">{title}</h3>
      <p className="text-desc">{desc}</p>
    </div>
  );
};

export const achievementList = [
  {
    id: "1",
    counts: "1000+",
    title: "Global customers",
    desc: "Trusted by a diverse and growing community worldwide.",
  },
  {
    id: "2",
    counts: "600%",
    title: "Successful delivery",
    desc: "Our commitment to reliable delivery shows in our remarkable success rate.",
  },
  {
    id: "3",
    counts: "40k",
    title: "Delivered packages",
    desc: "Thousands of packages, countless smiles.",
  },
  {
    id: "4",
    counts: "200+",
    title: "5-star reviews",
    desc: "Our satisfied customers love our efficient, easy-to-use platform.",
  },
];

export const howCredussWork = [
  {
    id: "1",
    icon: "/icons/profile-tick.svg",
    title: "Sign up",
    desc: "Joining Creduss is your gateway to efficient movement and reliable package delivery. Sign up easily by creating an account. Provide some basic information, and you're ready to embark on a journey of seamless logistics.",
  },
  {
    id: "2",
    icon: "/icons/book-delivery.svg",
    title: "Book your delivery",
    desc: "When you're ready to send a package, simply log in to your Creduss account. Tell us the pick-up location, the destination, and the preferred delivery time. Our user-friendly platform ensures you can book a delivery in just a few clicks.",
  },
  {
    id: "3",
    icon: "/icons/box.svg",
    title: "Prepare your parcel",
    desc: "Get your package ready for its journey. Ensure it's securely packed and labeled. Our couriers are dedicated to delivering your items safely, so proper packaging is essential.",
  },
  {
    id: "4",
    icon: "/icons/truck-tick.svg",
    title: "Send & Receive",
    desc: "On the recipient's end, Creduss ensures a smooth delivery experience. Our couriers follow the designated route to deliver your package promptly and securely. You'll receive real-time updates, and once the delivery is complete, your recipient can enjoy their parcel.",
  },
];
