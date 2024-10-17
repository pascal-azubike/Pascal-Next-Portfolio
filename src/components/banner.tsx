import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import PrimaryHeading from "./primaryHeading";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import { Button } from "./ui/button";
import Marquee from "react-fast-marquee";

export const testimony1 = [
  {
    name: "Mary Johnson",
    age: 64,
    image:
      "https://res.cloudinary.com/dsk8tta64/image/upload/q_auto/f_auto/w_400/v1724339696/happy-person-relaxing-outdoors_ryx9pm.jpg",
    profession: "Retired Teacher",
    review:
      "Plumbreed Puzzles brought joy back into my life with their engaging Bible-themed puzzles. Each piece reminds me of the rich stories I've cherished for years."
  },
  {
    name: "Emily Davis",
    age: 22,
    image:
      "https://res.cloudinary.com/dsk8tta64/image/upload/q_auto/f_auto/w_400/v1724339723/teen-smiling_beecha.jpg",
    profession: "College Student",
    review:
      "I love how Plumbreed Puzzles made learning the Bible fun and interactive. Their products have been a great addition to my personal study time."
  },
  {
    name: "David Smith",
    age: 52,
    image:
      "https://res.cloudinary.com/dsk8tta64/image/upload/q_auto/f_auto/w_400/v1724339717/single-laughing-man_ry3rjm.jpg",
    profession: "Engineer",
    review:
      "The puzzles from Plumbreed Puzzles have become a favorite pastime in our household. It's amazing how they make complex stories simple and enjoyable."
  },
  {
    name: "Sarah Lee",
    age: 36,
    image:
      "https://res.cloudinary.com/dsk8tta64/image/upload/q_auto/f_auto/w_400/v1724339723/teen-smiling_beecha.jpg",
    profession: "Stay-at-home Mom",
    review:
      "Plumbreed Puzzles have been a wonderful way for my family to bond and learn together. My kids love the colorful images and the stories behind each puzzle."
  }
];

export const testimony2 = [
  {
    name: "James Carter",
    age: 45,
    image:
      "https://res.cloudinary.com/dsk8tta64/image/upload/q_auto/f_auto/w_400/v1724339696/happy-person-relaxing-outdoors_ryx9pm.jpg",
    profession: "Pastor",
    review:
      "Plumbreed Puzzles are a fantastic resource for my church's Sunday school. The kids are always excited to learn through play."
  },
  {
    name: "Sophia Roberts",
    age: 30,
    image:
      "https://res.cloudinary.com/dsk8tta64/image/upload/q_auto/f_auto/w_400/v1724339717/single-laughing-man_ry3rjm.jpg",
    profession: "Teacher",
    review:
      "These puzzles are not only fun but also deeply meaningful. They’ve helped me incorporate Biblical teachings in a way that my students truly enjoy."
  },
  {
    name: "Michael Green",
    age: 40,
    image:
      "https://res.cloudinary.com/dsk8tta64/image/upload/q_auto/f_auto/w_400/v1724339696/happy-person-relaxing-outdoors_ryx9pm.jpg",
    profession: "Accountant",
    review:
      "I appreciate the quality and thoughtfulness that goes into each Plumbreed Puzzle. They are perfect for family gatherings and personal reflection."
  },
  {
    name: "Laura Brown",
    age: 28,
    image:
      "https://res.cloudinary.com/dsk8tta64/image/upload/q_auto/f_auto/w_400/v1724339723/teen-smiling_beecha.jpg",
    profession: "Graphic Designer",
    review:
      "Plumbreed Puzzles have brought a refreshing, creative spark to my faith journey. I love how each puzzle tells a story in a visually stunning way."
  }
];

const BannerSm = () => {
  return (
    <div className="relative overflow-y-hidden flex flex-col py-8 ">
      <div className="  relative max-w-[750px] md:mx-auto mx-4  ">
        <h1 className="  text-gray-500 tracking-wider text-center absolute top-0 pb-3 left-0 ">
          TESTIMONY
        </h1>
        <h3 className="font-bold  text-[30px] mt-4 md:text-[50px] text-center">
          What Our Customers Are Saying
        </h3>
        <div className="border-t mb-10 bg-[#1D1D1E] max-w-[203px] mx-auto mt-2"></div>
        <div className="flex flex-col items-center justify-center  gap-3 lg:gap-4 mb-[50px]">
          <p>
            we&apos;re Plumbrees Puzzle, spreading joy and salvation <br />
            through scripture-based games and puzzles.
          </p>
          <a href="/products" className="btn btn__primary btn__rounded">
            Buy Now
          </a>
        </div>
      </div>

      <Marquee
        gradient={false}
        gradientWidth={100}
        gradientColor="black"
        speed={50}
        pauseOnHover
        className="w-[10rem] h-96 flex   "
      >
        {testimony1.map((testimony, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-6 h-[280px] rounded-3xl mr-8 lg:mr-24 w-[358px] lg:w-[500px]  bg-[#212529]  "
          >
            <div className=" flex mt-4">
              <Image
                width={100}
                height={100}
                src={testimony.image}
                alt={testimony.name}
                className="h-24 w-24   rounded-full object-cover object-top"
              />
              <div className=" flex flex-col gap-1 mt-4 mx-4 ">
                <h3 className="font-medium  mb-1 text-gray-400  md:text-left text-base">
                  {testimony.name}
                </h3>
                <h3 className="font-medium mb-4 text-gray-400   md:text-left text-base">
                  {testimony.profession}
                </h3>
              </div>
            </div>
            <div className="flex px-3 lg:px-14  rounded-b-3xl pt-4 pb-8 text-white  justify-center items-start flex-col">
              <p className="  md:text-left text-base">{testimony.review}</p>
            </div>
          </div>
        ))}
      </Marquee>
      <Marquee
        gradient={false}
        gradientWidth={100}
        gradientColor="black"
        speed={50}
        pauseOnHover
        direction="right"
        className="w-[10rem] h-96 flex -mt-10  "
      >
        {testimony2.map((testimony, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-between rounded-3xl mr-8 lg:mr-24 h-[280px] w-[358px] lg:w-[500px]  bg-[#212529]  "
          >
            <div className=" flex mt-4 ">
              <Image
                width={100}
                height={100}
                src={testimony.image}
                alt={testimony.name}
                className="h-24 w-24   rounded-full object-cover object-top"
              />
              <div className=" flex flex-col gap-1 mt-4 ml-4 ">
                <h3 className="font-medium  mb-1 text-gray-400  md:text-left text-base">
                  {testimony.name}
                </h3>
                <h3 className="font-medium mb-4 text-gray-400   md:text-left text-base">
                  {testimony.profession}
                </h3>
              </div>
            </div>
            <div className="flex px-3  rounded-b-3xl pt-4 pb-8 text-white  justify-center items-start flex-col">
              <p className="  md:text-left text-base">{testimony.review}</p>
            </div>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

const Banner = () => {
  return (
    <div className=" ">
      <BannerSm />
    </div>
  );
};

export default Banner;
