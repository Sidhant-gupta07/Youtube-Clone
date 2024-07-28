import React from "react";
import { IoMdHome } from "react-icons/io";
import { MdOutlineSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { GoHistory } from "react-icons/go";
import { CgPlayList } from "react-icons/cg";
import { BiSolidVideos } from "react-icons/bi";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { FaFire } from "react-icons/fa6";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { RiLiveLine } from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { SiYoutubeshorts } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { MdOutlineLightbulb } from "react-icons/md"
import { FaShirt } from "react-icons/fa6";
import { MdOutlinePodcasts } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { AiOutlineFileExclamation } from "react-icons/ai";
import { useSelector } from "react-redux";
import store from "../../utils/Store";

const sidebarItem = [
  {
      icons: <IoMdHome size={20} />,
      title: "Home",
    },

    {
      icons: <SiYoutubeshorts size={20} />,
      title: "Shorts",
    },

    {
      icons: <MdOutlineSubscriptions size={20}/>,
      title: "Subscriptions",
    },
    {
      icons: <CgProfile size={20}/>,
      title: " channel",
    },
    
    {
        icons: <GoHistory size={20} />,
        title: "History",
      },
  
      {
        icons: <CgPlayList size={20} />,
        title: "PlayList",
      },
  
      {
        icons: <BiSolidVideos size={20} />,
        title: "Your videos",
      },

      {
        icons: <MdOutlineWatchLater size={20} />,
        title: "Watch later",
      },
  
      {
        icons: <AiOutlineLike size={20} />,
        title: "Liked videos",
      },
  
      {
        icons: <MdOutlineShoppingBag size={20} />,
        title: "Shopping",
      },

      {
        icons: <FaFire size={20} />,
        title: "Trending",
      },
  
      {
        icons: <IoMusicalNoteOutline size={20} />,
        title: "Music",
      },
  
      {
        icons: <RiLiveLine size={20} />,
        title: "Live",
      },

      {
        icons: <SiYoutubegaming size={20} />,
        title: "Gaming",
      },
  
      {
        icons: <IoNewspaperOutline size={20} />,
        title: "News",
      },
  
      {
        icons: <CiTrophy size={20} />,
        title: "Sports",
      },

      {
        icons: <MdOutlineLightbulb size={20} />,
        title: "Courses",
      },
  
      {
        icons: <FaShirt className="items-center sm:h-12 md:h-5 sm:size-8 md:size-5"/>,
        title: "Faishon & Beauty",
      },
  
      {
        icons: <MdOutlinePodcasts size={20} />,
        title: "Podcasts",
      },

      {
        icons: <IoSettingsOutline size={20} />,
        title: "Settings",
      },

      {
        icons: <AiOutlineFileExclamation size={20} />,
        title: "Logout",
      },

      {
        icons: <IoMdHelpCircleOutline size={20} />,
        title: "Help",
      },
  // Add more items as needed
];
const Sidebar = () => {
// const open = true;
const open = useSelector((store)=> store.app.open);
  return (
    <div className={`fixed ${open? "sm:w-[25%] md:w-[11%] lg:w-[12%]": "md:w-[5%] sm:w-[1%]"} 
    h-[calc(100vh-4rem)] mt-16 overflow-y-auto left-0 bg-white`}>
      {sidebarItem.map((item, index) => {
        return (
          <div
            className="hover:bg-gray-300 pr-4 pl-2 rounded-full cursor-pointer py-[6px] items-center mb-2 ml-2"
            key={index}
          >
            <div className="flex">
              {item.icons}
              <p className={`ml-3 text-sm ${open?"": "hidden"}`}>{item.title}</p>
            </div>
          </div>
        );
      })}
        <div className="border-t-2 mb-7">
        <div className="mt-2 text-gray-500 text-sm mx-2">
            <p className="mb-2 text-gray-500 text-sm">About Press Copyright Contact Us Creators Advertise Developers</p>
            <p className="mb-2 text-gray-500 text-sm">Terms Privacy Policy&Safety How YouTube works Test new features</p>
            <p className="text-gray-500 font-semibold">© 2024 Google LLC</p>
          </div>
        </div>

    </div>
  );
};

export default Sidebar;
