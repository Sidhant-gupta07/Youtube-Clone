import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import axios from "axios";
import { API_KEY } from "../../Constants/Youtube";
const VideoCart = ({item}) => {

const [ytIcon, setYtIcon] = useState("");

  const youtubechannelname = async() => {
try {
  const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
  setYtIcon(res.data.items[0].snippet.thumbnails.high.url)
} catch (error) {
  console.log(error);
}
  }

useEffect(()=>{
  youtubechannelname();
},[])
 

  return (
    <>
      <div>
        <div className="w-94 cursor-pointer my-5">
          <img
            className="lg:w-full rounded-xl"
            src={item.snippet.thumbnails.medium.url}
            alt="thumbnail"
          />
          <div>
            <div className="flex mt-2">
              <Avatar
              className="object-cover object-center"
                src={ytIcon}
                size={30}
                round="100px"
              />
              <div className="ml-2 sm:w-[260px] md:w-[250px] lg:w-[270px]">
                <h1 className="font-semibold">{item.snippet.title}</h1>
                <p className="text-sm text-gray-500">{item.snippet.channelTitle}</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoCart;
