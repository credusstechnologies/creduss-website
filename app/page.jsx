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
          <section className="md:px-20 px-[15.5px] md:w-[60%] md:pr-1">
            <h6 className="text-warning-400 text-base font-semibold leading-normal">
              Our Achievements
            </h6>
            <h1 className="md:leading-[4rem] leading-[2.5rem] font-bold text-[1.875rem] md:text-[3.75rem] mb-2 text-secondary">
              We manage logistics from all over the world
            </h1>
            <p className="text-desc">
              Have a passion for exploring new horizons? With Creduss, your
              travels can be more than just a journey – they can be an
              opportunity. Become a courier on your trips and earn.
            </p>
          </section>

          <section className="md:px-20 px-[15.5px] md:flex md:items-center md:justify-between mt-5">
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

          <section className="md:px-20 px-[15.5px] py-10 flex flex-col-reverse md:items-center md:flex-row md:justify-between bg-[#f0f9ff">
            <div className="md:w-[45%] mt-4 md:mt-0">
              <h6 className="text-warning-400 text-base font-semibold leading-normal">
                Unique features
              </h6>
              <h1 className="leading-[2.5rem] font-bold text-3xl md:text-[3.75rem] mb-2 text-secondary md:text-6xl md:leading-[72px]">
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

          <section className="bg-[#1a1824] py-10 text-white why-creduss-wrapper">
            <h1 className="md:text-6xl text-3xl font-bold md:leading-[72px] leading-[38px] text-center mb-5">
              Why Creduss?
            </h1>

            <WhyCredussSwiper />
          </section>

          <section className="py-10 px-[15.5px] md:px-20">
            <h1 className="md:text-[3.75rem] font-[700] text-center mb-5 text-secondary">
              How Creduss Works
            </h1>

            <section className="px-[15.5px] relative">
              <div className="hidden md:block absolute left-[27.5%] top-[80px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="534"
                  height="365"
                  viewBox="0 0 534 365"
                  fill="none">
                  <path
                    d="M528.028 124.476L533.922 112.129H519.665L525.559 124.476H528.028ZM321.417 8.82311L333.764 14.7171V0.459653L321.417 6.35365V8.82311ZM6.55995 223.666L0.665952 236.014H14.9234L9.02941 223.666H6.55995ZM321.005 336.85L333.352 342.744V328.487L321.005 334.381V336.85ZM528.028 464.439L533.922 452.092H519.665L525.559 464.439H528.028ZM6.55995 562.395L0.665952 574.742H14.9234L9.02941 562.395H6.55995ZM321.005 666.524L333.352 672.418V658.16L321.005 664.054V666.524ZM213.172 334.381L200.824 328.487V342.744L213.172 336.85V334.381ZM213.172 664.054L200.824 658.16V672.418L213.172 666.524V664.054ZM213.172 6.35365L200.824 0.459653V14.7171L213.172 8.82311V6.35365ZM9.02941 221.814V217.081H6.55995V221.814H9.02941ZM9.02941 217.081C9.02941 215.313 9.14431 213.572 9.36691 211.865L6.9182 211.546C6.68181 213.358 6.55995 215.206 6.55995 217.081H9.02941ZM12.0583 201.799C13.4039 198.555 15.1655 195.525 17.2769 192.777L15.3189 191.273C13.0775 194.189 11.2066 197.406 9.7772 200.854L12.0583 201.799ZM24.6486 185.406C27.3962 183.294 30.4257 181.533 33.6707 180.187L32.7248 177.906C29.2777 179.335 26.0606 181.206 23.1439 183.448L24.6486 185.406ZM43.7366 177.496C45.4431 177.273 47.184 177.158 48.9524 177.158V174.689C47.077 174.689 45.2293 174.811 43.4171 175.047L43.7366 177.496ZM48.9524 177.158H53.9147V174.689H48.9524V177.158ZM63.8394 177.158H73.764V174.689H63.8394V177.158ZM83.6886 177.158H93.6132V174.689H83.6886V177.158ZM103.538 177.158H113.462V174.689H103.538V177.158ZM123.387 177.158H133.312V174.689H123.387V177.158ZM143.236 177.158H153.161V174.689H143.236V177.158ZM163.086 177.158H173.01V174.689H163.086V177.158ZM182.935 177.158H192.859V174.689H182.935V177.158ZM202.784 177.158H212.709V174.689H202.784V177.158ZM222.633 177.158H232.558V174.689H222.633V177.158ZM242.483 177.158H252.407V174.689H242.483V177.158ZM262.332 177.158H272.256V174.689H262.332V177.158ZM282.181 177.158H292.106V174.689H282.181V177.158ZM302.03 177.158H311.955V174.689H302.03V177.158ZM321.88 177.158H331.804V174.689H321.88V177.158ZM341.729 177.158H351.653V174.689H341.729V177.158ZM361.578 177.158H371.503V174.689H361.578V177.158ZM381.427 177.158H391.352V174.689H381.427V177.158ZM401.277 177.158H411.201V174.689H401.277V177.158ZM421.126 177.158H431.05V174.689H421.126V177.158ZM440.975 177.158H450.9V174.689H440.975V177.158ZM460.824 177.158H470.749V174.689H460.824V177.158ZM480.674 177.158H485.636V174.689H480.674V177.158ZM485.636 177.158C487.511 177.158 489.359 177.036 491.171 176.8L490.852 174.351C489.145 174.574 487.404 174.689 485.636 174.689V177.158ZM501.864 173.941C505.311 172.512 508.528 170.641 511.444 168.399L509.94 166.441C507.192 168.553 504.163 170.314 500.918 171.66L501.864 173.941ZM519.269 160.574C521.511 157.658 523.382 154.44 524.811 150.993L522.53 150.047C521.184 153.292 519.423 156.322 517.311 159.07L519.269 160.574ZM527.67 140.301C527.906 138.489 528.028 136.641 528.028 134.766H525.559C525.559 136.534 525.444 138.275 525.221 139.982L527.67 140.301ZM528.028 134.766V129.107H525.559V134.766H528.028ZM215.068 8.82311H224.564V6.35365H215.068V8.82311ZM234.059 8.82311H243.555V6.35365H234.059V8.82311ZM253.051 8.82311H262.546V6.35365H253.051V8.82311ZM272.042 8.82311H281.538V6.35365H272.042V8.82311ZM291.033 8.82311H300.529V6.35365H291.033V8.82311ZM310.025 8.82311H319.52V6.35365H310.025V8.82311ZM215.024 336.85H224.49V334.381H215.024V336.85ZM233.956 336.85H243.423V334.381H233.956V336.85ZM252.889 336.85H262.355V334.381H252.889V336.85ZM271.821 336.85H281.288V334.381H271.821V336.85ZM290.754 336.85H300.22V334.381H290.754V336.85ZM309.687 336.85H319.153V334.381H309.687V336.85ZM9.02941 558.073V552.517H6.55995V558.073H9.02941ZM9.02941 552.517C9.02941 550.748 9.14431 549.007 9.36691 547.301L6.9182 546.981C6.68181 548.794 6.55995 550.641 6.55995 552.517H9.02941ZM12.0583 537.235C13.4039 533.99 15.1656 530.96 17.2769 528.213L15.3189 526.708C13.0775 529.625 11.2066 532.842 9.7772 536.289L12.0583 537.235ZM24.6486 520.841C27.3962 518.73 30.4257 516.968 33.6707 515.623L32.7248 513.341C29.2777 514.771 26.0606 516.642 23.1439 518.883L24.6486 520.841ZM43.7366 512.931C45.4431 512.709 47.184 512.594 48.9524 512.594V510.124C47.077 510.124 45.2293 510.246 43.4171 510.482L43.7366 512.931ZM48.9524 512.594H53.9147V510.124H48.9524V512.594ZM63.8394 512.594H73.764V510.124H63.8394V512.594ZM83.6886 512.594H93.6132V510.124H83.6886V512.594ZM103.538 512.594H113.462V510.124H103.538V512.594ZM123.387 512.594H133.312V510.124H123.387V512.594ZM143.236 512.594H153.161V510.124H143.236V512.594ZM163.086 512.594H173.01V510.124H163.086V512.594ZM182.935 512.594H192.859V510.124H182.935V512.594ZM202.784 512.594H212.709V510.124H202.784V512.594ZM222.633 512.594H232.558V510.124H222.633V512.594ZM242.483 512.594H252.407V510.124H242.483V512.594ZM262.332 512.594H272.256V510.124H262.332V512.594ZM282.181 512.594H292.106V510.124H282.181V512.594ZM302.03 512.594H311.955V510.124H302.03V512.594ZM321.88 512.594H331.804V510.124H321.88V512.594ZM341.729 512.594H351.653V510.124H341.729V512.594ZM361.578 512.594H371.503V510.124H361.578V512.594ZM381.427 512.594H391.352V510.124H381.427V512.594ZM401.277 512.594H411.201V510.124H401.277V512.594ZM421.126 512.594H431.05V510.124H421.126V512.594ZM440.975 512.594H450.9V510.124H440.975V512.594ZM460.824 512.594H470.749V510.124H460.824V512.594ZM480.674 512.594H485.636V510.124H480.674V512.594ZM485.636 512.594C487.511 512.594 489.359 512.472 491.171 512.235L490.852 509.787C489.145 510.009 487.404 510.124 485.636 510.124V512.594ZM501.864 509.376C505.311 507.947 508.528 506.076 511.444 503.835L509.94 501.877C507.192 503.988 504.163 505.75 500.918 507.095L501.864 509.376ZM519.269 496.01C521.511 493.093 523.382 489.876 524.811 486.429L522.53 485.483C521.184 488.728 519.423 491.757 517.311 494.505L519.269 496.01ZM527.67 475.736C527.906 473.924 528.028 472.077 528.028 470.201H525.559C525.559 471.97 525.444 473.711 525.221 475.417L527.67 475.736ZM528.028 470.201V465.674H525.559V470.201H528.028ZM215.024 666.524H224.49V664.054H215.024V666.524ZM233.956 666.524H243.423V664.054H233.956V666.524ZM252.889 666.524H262.355V664.054H252.889V666.524ZM271.821 666.524H281.288V664.054H271.821V666.524ZM290.754 666.524H300.22V664.054H290.754V666.524ZM309.687 666.524H319.153V664.054H309.687V666.524Z"
                    fill="#FDB022"
                  />
                </svg>
              </div>

              <div className="grid md:grid-cols-2  md:gap-y-[150px] md:gap-x-[160px]">
                {howCredussWork.map((i, index) => (
                  <div className="">
                    <div
                      key={i.id}
                      className="flex items-start bg-gray-50 p-[20px] gap-[27px] rounded-[21.66px] shadow border border-slate-800 border-opacity-5">
                      <Image src={i.icon} alt="icon" width={32} height={32} />

                      <div>
                        <h2 className="text-gray-900 text-base font-bold leading-normal">
                          {i.title}
                        </h2>
                        <p className="text-desc">{i.desc}</p>
                      </div>
                    </div>
                    {index !== howCredussWork.length - 1 && (
                      <div className="md:hidden flex justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="197"
                          height="46"
                          viewBox="0 0 197 46"
                          fill="none">
                          <path
                            d="M194.061 5.61155L196.74 0H190.26L192.939 5.61155H194.061ZM2.93884 39.7413L0.260169 45.3529H6.73983L4.06116 39.7413H2.93884ZM4.06116 42.883V42.0597H2.93884V42.883H4.06116ZM4.06116 42.0597C4.06116 41.256 4.11337 40.4648 4.21454 39.6892L3.10166 39.544C2.99423 40.3676 2.93884 41.2073 2.93884 42.0597H4.06116ZM5.43771 35.1145C6.04927 33.6397 6.84987 32.2629 7.80945 31.0142L6.91955 30.3303C5.9009 31.6559 5.05065 33.118 4.401 34.6846L5.43771 35.1145ZM11.1597 27.6639C12.4084 26.7044 13.7853 25.9037 15.26 25.2922L14.8301 24.2555C13.2635 24.9051 11.8014 25.7554 10.4758 26.774L11.1597 27.6639ZM19.8347 24.069C20.6103 23.9679 21.4015 23.9156 22.2052 23.9156V22.7933C21.3528 22.7933 20.5131 22.8487 19.6895 22.9561L19.8347 24.069ZM22.2052 23.9156H24.4491V22.7933H22.2052V23.9156ZM28.9371 23.9156H33.425V22.7933H28.9371V23.9156ZM37.9129 23.9156H42.4009V22.7933H37.9129V23.9156ZM46.8888 23.9156H51.3767V22.7933H46.8888V23.9156ZM55.8647 23.9156H60.3526V22.7933H55.8647V23.9156ZM64.8405 23.9156H69.3284V22.7933H64.8405V23.9156ZM73.8164 23.9156H78.3043V22.7933H73.8164V23.9156ZM82.7922 23.9156H87.2802V22.7933H82.7922V23.9156ZM91.7681 23.9156H96.256V22.7933H91.7681V23.9156ZM100.744 23.9156H105.232V22.7933H100.744V23.9156ZM109.72 23.9156H114.208V22.7933H109.72V23.9156ZM118.696 23.9156H123.184V22.7933H118.696V23.9156ZM127.672 23.9156H132.159V22.7933H127.672V23.9156ZM136.647 23.9156H141.135V22.7933H136.647V23.9156ZM145.623 23.9156H150.111V22.7933H145.623V23.9156ZM154.599 23.9156H159.087V22.7933H154.599V23.9156ZM163.575 23.9156H168.063V22.7933H163.575V23.9156ZM172.551 23.9156H174.795V22.7933H172.551V23.9156ZM174.795 23.9156C175.647 23.9156 176.487 23.8603 177.31 23.7528L177.165 22.6399C176.39 22.7411 175.599 22.7933 174.795 22.7933V23.9156ZM182.17 22.4535C183.736 21.8038 185.199 20.9536 186.524 19.9349L185.84 19.045C184.592 20.0046 183.215 20.8052 181.74 21.4168L182.17 22.4535ZM190.08 16.3786C191.099 15.0531 191.949 13.591 192.599 12.0244L191.562 11.5945C190.951 13.0692 190.15 14.4461 189.191 15.6948L190.08 16.3786ZM193.898 7.16496C194.006 6.34137 194.061 5.50167 194.061 4.64931H192.939C192.939 5.453 192.887 6.24421 192.785 7.0198L193.898 7.16496ZM194.061 4.64931V3.48698H192.939V4.64931H194.061Z"
                            fill="#FDB022"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* <div className="grid md:grid-cols-2 gap-10">
              {howCredussWork.map((i) => (
                <div key={i.id} className="flex items-start gap-5">

                  <Image src={i.icon} alt="icon" width={32} height={32} />

                  <div>
                    <h2 className="font-bold p-0 m-0">{i.title}</h2>
                    <p className="text-desc">{i.desc}</p>
                  </div>
                </div>
              ))}
            </div> */}
          </section>

          <section className="bg-warning-400 py-10 pt-10 ">
            <h6 className="text-secondary text-center text-base font-semibold leading-normal">
              Testimonials
            </h6>
            <h1 className="text-center md:leading-[4rem] leading-[2.5rem] font-bold text-[1.875rem] md:text-[3.75rem] mb-10 mt-5 text-white md:w-[80%] m-auto">
              Our customers have something to say to you
            </h1>

            <TestimonialsSwiper />
          </section>

          <section className="">
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
