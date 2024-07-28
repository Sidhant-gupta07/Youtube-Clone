import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY, YOUTUBE_VIDEO_API } from "../../Constants/Youtube";
import VideoCart from "../VideoCart/VideoCart";
import { Link } from "react-router-dom";
import ytlogo from "../../assets/images/yt-logo-mobile.png";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from "../../utils/AppSlice";

const Video = () => {
  const dispatch = useDispatch();
  const {video, category} = useSelector((store) => store.app);

  const fetchtingYoutubevideo = async () => {
    try {
      const res = await axios.get(YOUTUBE_VIDEO_API);
      // console.log("Fetched Videos:", res.data.items);
      dispatch(setHomeVideo(res.data.items));
    } catch (error) {
      console.log("Error fetching YouTube videos:", error);
    }
  };
  
  const fetchVideoByCategory = async () => {
    try {
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`);
      // console.log("Fetched Category Videos:", res.data.items);
      dispatch(setHomeVideo(res.data.items));
    } catch (error) {
      console.log("Error fetching category videos:", error);
    }
  };

  useEffect(() => {
    if (category === "All") {
      
      fetchtingYoutubevideo();
    }else{

      fetchVideoByCategory();
    }
  }, [category]);

  return (
    <>
      <div>
        <div className="relative">
          <img 
            src="https://www.gstatic.com/youtube/img/promos/growth/d7b61727da369058e783ec02c0a6609c033bee601c797ffd33c23e0ba92f8e43_2560x520.jpeg" 
            alt="Loading...." 
            className="w-full mt-7"
          />
        </div>
        <div className="flex">
          <img 
            src={ytlogo} 
            alt="logo" 
            className="w-[40px] absolute top-[194px] ml-7"
          />
          <h1 className="absolute top-[190px] ml-20 gap-2 sm:text-2xl md:text-2xl lg:text-3xl font-sans font-medium">
            YouTube Premium
          </h1>
        </div>
        <div>
          <h1 className="absolute top-[240px] ml-7 sm:text-2xl md:text-3xl lg:text-3xl font-sans font-bold">
            Don't miss a students-only <br /> discount
          </h1>
        </div>
      </div>
      <div className="mt-7 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {video.length > 0 ? (
          video.map((item) => (
            <Link to={`/watch?v=${item.id.videoId}`} key={item.id.videoId}>
              <VideoCart item={item} />
            </Link>
          ))
        ) : (
          <p>No videos found</p>
        )}
      </div>
    </>
  );
};

export default Video;
