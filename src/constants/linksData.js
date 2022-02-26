import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { IoImages } from "react-icons/io5";
import { BiNews } from "react-icons/bi";
import { HiLocationMarker } from "react-icons/hi";
import { MdSlowMotionVideo } from "react-icons/md";

export const links = [
  {
    link: "All",
    Icon: <AiOutlineSearch />,
  },
  {
    link: "Images",
    Icon: <IoImages />,
  },
  {
    link: "News",
    Icon: <BiNews />,
  },
  {
    link: "Maps",
    Icon: <HiLocationMarker />,
  },
  {
    link: "Videos",
    Icon: <MdSlowMotionVideo />,
  },
  {
    link: "More",
    Icon: false,
  },
];
