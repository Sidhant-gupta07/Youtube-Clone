import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Avatar from "react-avatar";
import axios from "axios";
import { API_KEY } from "../../Constants/Youtube";
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { PiShareFatThin } from "react-icons/pi";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from "../LiveChat/LiveChat";
import { useDispatch } from "react-redux";
import { setMessage } from "../../utils/ChatSlice";

const WatchPage = () => {
  const [Input, setInput] = useState("");
  const [singleVideo, setSingleVideo] = useState("");
  const [searchParms] = useSearchParams();
  const videoId = searchParms.get("v");

const dispatch = useDispatch();
  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&regionCode=IN&key=${API_KEY}`
      );
      console.log(res);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = () => {
    dispatch(setMessage({
      name:"sidhant gupta",
      message:Input,
    }));
    setInput("");
  };

  useEffect(() => {
    getSingleVideo();
  }, []);

  return (
    <div className="mt-7 flex">
      <div className="ml-7 mr-7 mb-24 sm:w-[60%] md:w-[50%] lg:w-[65%]">
        <iframe
          className="rounded-2xl"
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="Let&#39;s Build &amp; Deploy YouTube Clone with (ReactJS, Redux Toolkit, Tailwind CSS)"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <h1 className="font-bold mt-2 text-lg">
          🔴 {singleVideo?.snippet?.title}
        </h1>

        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full mt-3">
            <div className="flex">
              <Avatar
                className="mr-2"
                src={singleVideo?.snippet?.thumbnails?.medium?.url}
                size={30}
                round="100px"
              />
              <h1 className="text-sm font-bold">
                {singleVideo?.snippet?.channelTitle}
              </h1>
            </div>

            <div>
              <button
                className="border-none bg-gray-300 
            hover:bg-black hover:text-white px-5 py-2 rounded-full mr-2 font-medium"
              >
                Join
              </button>
              <button
                className="border-none bg-black text-white
            hover:bg-gray-300 hover:text-black px-3 py-2 rounded-full font-medium"
              >
                Subscribe
              </button>
            </div>
            <div>
              <div className="flex">
                <div
                  className="items-center rounded-full border-gray-800 
              border-none border-r-0 rounded-r-none px-5 py-2 cursor-pointer 
              bg-gray-200 hover:bg-gray-300"
                >
                  <AiOutlineLike size={19} className="hover:text-blue-500" />
                </div>
                <div
                  className="items-center rounded-full border-gray-800 
              border-none outline-none border-l-2 rounded-l-none px-5 py-2 cursor-pointer bg-gray-200 hover:bg-gray-300"
                >
                  <BiDislike size={19} className="hover:text-rose-500" />
                </div>
                <div
                  className=" flex items-center rounded-full border-gray-800 
              border-none px-5 py-2 cursor-pointer ml-3 bg-gray-200 hover:bg-gray-300"
                >
                  <PiShareFatThin
                    size={19}
                    className="hover:text-blue-800 mr-2"
                  />
                  <p>Share</p>
                </div>

                <div
                  className=" flex items-center rounded-full border-gray-800 
              border-none px-5 py-2 cursor-pointer ml-3 bg-gray-200 hover:bg-gray-300"
                >
                  <MdOutlineFileDownload
                    size={19}
                    className="hover:text-blue-800 mr-2"
                  />
                  <p>Download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-black text-white py-5 px-3 mt-5 rounded-xl">
          {singleVideo?.snippet?.description}
        </div>
      </div>

      <div className=" w-[40%] ">
        <div className="flex justify-between items-center mr-7 rounded-md py-2 bg-gray-200">
          <select
            name="chats"
            id="chats"
            className="border-none outline-none ml-3 cursor-pointer bg-gray-200"
          >
            <option value="Topchat" className="rounded-md cursor-pointer">
              Top chat
            </option>
            <option value="livechat">Live chat</option>
          </select>
          <BsThreeDotsVertical
            size={20}
            className="mr-3 cursor-pointer hover:bg-gray-200 rounded-full
          "
          />
        </div>
        <div
          className=" mr-7 rounded-md py-2 bg-gray-200 mt-3 overflow-y-auto h-[27rem]
        border- border-gray-800 flex flex-col-reverse"
        >
          <LiveChat />
        </div>
          <div>
            <div className="flex mr-2 ml-0.2">
              <Avatar
                src="https://i.pinimg.com/originals/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg"
                size={30}
                round="100px"
                className="mt-2.5"
              />
              <input
                type="text"
                placeholder="send message"
                className="ml-1 w-[80%] px-2 py-2 rounded-lg
            outline-none mt-3 bg-gray-300"
                value={Input}
                onChange={(e) => setInput(e.target.value)}
              />
              <div></div>
              <button className="ml-1 bg-gray-300 rounded-full px-3 py-2 mt-3">
                <LuSendHorizonal size={16} onClick={sendMessage} />
              </button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default WatchPage;
