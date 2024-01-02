"use client";
import Button from "@/components/Button";
import Layout from "@/components/Layout";
import Image from "next/image";

import AboutImg from "../../public/icons/about.png";
import AboutImg2 from "../../public/icons/about2.png";
import Accordion from "@/components/Accordion";

const About = () => {
  return (
    <Layout heroBg={"/icons/about-bg.png"}>
      <section className="py-10 px-10 md:px-20">
        <h1 className="md:text-[3.75rem] font-[700] text-center mb-5 text-secondary">
          Our Values
        </h1>

        <div className="grid md:grid-cols-2 md:gap-32 gap-20">
          {ourValuesList.map((i) => (
            <div key={i.id} className="flex gap-5 ">
              <div
                style={{
                  width: "50px",
                }}
                className="">
                <Image
                  style={{
                    width: "100%",
                  }}
                  src={i.icon}
                  alt="icon"
                  width={60}
                  height={60}
                />
              </div>

              <div>
                <h2 className="font-bold p-0 m-0">{i.title}</h2>
                <p>{i.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="md:flex md:items-center md:justify-between gap-20 bg-green-100 px-10 md:px-0">
        <div
          className="md:w-1/2"
          style={{
            background:
              "var(--gradient-primary-angular, conic-gradient(from 259deg at 50% 50%, #2FB070 0deg, rgba(47, 176, 112, 0.00) 360deg))",
          }}>
          <div>
            <Image src={AboutImg} alt="woman traveling" />
          </div>
        </div>

        <div className="md:w-1/2 md:p-20 ">
          <div className=" ">
            <h6 className="text-warning-400">Who we are</h6>
            <h1 className="text-secondary text-[3.75rem] md:leading-[4.5rem] font-bold">
              Global online logistics and courier
            </h1>
            <p className="text-[0.875rem] leading-[1.25rem] mb-4">
              Creduss is a global online logistics and courier marketplace that
              is headquartered in Tallinn and Lagos. Creduss is a platform that
              connects travellers with free baggage space to parcel going to
              their destination. We help travellers earn passive income to
              subsidise their travel. Users can use the platform to send parcels
              to anywhere in the world faster and cheaper. They can also use the
              platform to earn while they are travelling.
            </p>
            <Button twStyles="px-7 py-4 text-white" />
          </div>
        </div>
      </section>

      <section className="md:flex md:items-center flex-col-reverse md:flex-row md:justify-between gap-20 px-10 md:px-0 pl-10 md:pl-20">
        <div className="md:w-1/2   md:p-20 ">
          <div className="  ">
            <h6 className="text-warning-400">What we do</h6>
            <h1 className="text-secondary text-[3.75rem] md:leading-[4.5rem] font-bold">
              Enabling sales through on-time delivery
            </h1>
            <p className="text-[0.875rem] leading-[1.25rem] mb-4">
              We are the oil that enables the engine of the global economy to
              keep running. With all businesses now online there needs to be a
              cheaper and faster way to deliver to their customers on time. This
              is where Creduss for business comes in, we help small business and
              online e-commerce companies to sell more through cheap on-time
              delivery using people’s mobility and free baggage space to deliver
              the parcels. There is no sorting centers that eats up delivery
              time. Buy online, ship with creduss, contract an associate going
              to the destination of your orders, receive your parcel on arrival.
            </p>
            <Button twStyles="px-7 py-4 text-white" />
          </div>
        </div>

        <div className="md:w-1/2">
          <div>
            <Image src={AboutImg2} alt="woman traveling" />
          </div>
        </div>
      </section>

      <section className="my-10 px-10 md:px-20">
        <Accordion />
      </section>
    </Layout>
  );
};

export default About;

export const ourValuesList = [
  {
    id: "1",
    icon: "/icons/safety.svg",
    title: "Safety",
    desc: "Joining Creduss is your gateway to efficient movement and reliable package delivery. Sign up easily by creating an account. Provide some basic information, and you're ready to embark on a journey of seamless logistics.",
  },
  {
    id: "2",
    icon: "/icons/excellence.png",
    title: "Excellence",
    desc: "When you're ready to send a package, simply log in to your Creduss account. Tell us the pick-up location, the destination, and the preferred delivery time. Our user-friendly platform ensures you can book a delivery in just a few clicks.",
  },
  {
    id: "3",
    icon: "/icons/integrity.png",
    title: "Integrity",
    desc: "Get your package ready for its journey. Ensure it's securely packed and labeled. Our couriers are dedicated to delivering your items safely, so proper packaging is essential.",
  },
  {
    id: "4",
    icon: "/icons/support.png",
    title: "Customer support",
    desc: "On the recipient's end, Creduss ensures a smooth delivery experience. Our couriers follow the designated route to deliver your package promptly and securely. You'll receive real-time updates, and once the delivery is complete, your recipient can enjoy their parcel.",
  },
];
