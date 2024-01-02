import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Button from "./Button";

const Accordion = () => {
  // state holds the ID of active accordion item
  const [activeItemId, setActiveItemId] = useState(null);

  const pathname = usePathname();

  // fxn that checks if the ID of clicked accordion item has already been clicked and set as activeItemId
  // fxn takes in the ID of clicked accordion item
  const handleClickedItem = (itemId) => {
    if (itemId === activeItemId) {
      setActiveItemId(null);
    } else {
      setActiveItemId(itemId);
    }
  };

  return (
    <div className="accordion md:w-3/5 m-auto">
      <div className="mb-5 text-center">
        <h1 className="md:leading-[4rem] leading-[2.5rem] font-bold text-[1.875rem] md:text-[3.75rem] mb-10 mt-5 text-secondary md:w-[80%] m-auto">
          Frequently asked questions
        </h1>
        <p>Here are some of the most common frequently asked questions</p>
      </div>

      {faqList.map((item) => (
        <AccordionItem
          key={item.id}
          isActive={activeItemId === item.id}
          item={item}
          onItemClick={handleClickedItem}
        />
      ))}

      <div className="bg-slate-50 flex items-center justify-center py-10 text-center my-10">
        <div className="flex items-center justify-center flex-col">
          <Image
            src="/icons/avatar-group.png"
            alt="avatar group"
            width={100}
            height={100}
          />

          <div className="my-5">
            <h4>Still have questions</h4>
            <p className="text-desc">
              Can't find the answer you're looking for?
            </p>
          </div>

          <div className="flex items-center gap-5">
            <Button
              label="Contact us"
              href="/contact-us"
              twStyles="px-[18px] py-2.5 bg-[#CBFFE5] text-green-600"
              showIcon={false}
            />
            {pathname !== "/faq" && (
              <Button
                label="Go to FAQ page"
                href="#"
                twStyles="px-[18px] py-2.5 text-white"
                showIcon={false}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;

export const AccordionItem = ({ item, onItemClick, isActive }) => {
  return (
    <div className="accordion-item mb-5">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => onItemClick(item.id)}>
        <h1 className="font-bold">{item.ques}</h1>
        <button
          className={`border border-gray-400 text-gray-400 w-[20px] min-w-[20px] h-[20px] min-h-[20px] flex items-center justify-center p-1 ${
            isActive ? "text-warning-500 border-warning-500" : ""
          }`}
          style={{ borderRadius: "50%" }}>
          {`${isActive ? "-" : "+"}`}
        </button>
      </div>

      {isActive && (
        <div className="w-4/5">
          <p className="text-desc">{item.res}</p>
        </div>
      )}
    </div>
  );
};

export const faqList = [
  {
    id: "1",
    ques: "How do I know what item is in my percel?",
    res: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam! Quia dolor sunt aliquid. Exercitationem odit itaque officia maiores eaque!",
  },
  {
    id: "2",
    ques: "What if I was given an incriminating parcel sealed in?",
    res: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam! Quia dolor sunt aliquid. Exercitationem odit itaque officia maiores eaque!",
  },
  {
    id: "3",
    ques: "How do I find parcels going my destination?",
    res: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam! Quia dolor sunt aliquid. Exercitationem odit itaque officia maiores eaque!",
  },
  {
    id: "4",
    ques: "How do I choose if I have several parcel going my destination?",
    res: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam! Quia dolor sunt aliquid. Exercitationem odit itaque officia maiores eaque!",
  },
  {
    id: "5",
    ques: "How do I choose if I have several parcel going my destination?",
    res: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam! Quia dolor sunt aliquid. Exercitationem odit itaque officia maiores eaque!",
  },
  {
    id: "6",
    ques: "How do I choose if I have several parcel going my destination?",
    res: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam! Quia dolor sunt aliquid. Exercitationem odit itaque officia maiores eaque!",
  },
  {
    id: "7",
    ques: "How do I choose if I have several parcel going my destination?",
    res: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, aliquam! Quia dolor sunt aliquid. Exercitationem odit itaque officia maiores eaque!",
  },
];
