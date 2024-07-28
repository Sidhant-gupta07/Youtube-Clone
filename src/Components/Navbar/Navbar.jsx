import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiVideoOn } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  setCategory,
  setSearchSuggestion,
  toggleSidebar,
} from "../../utils/AppSlice";
import axios from "axios";
import { SEARCH_SUGGESTION_API } from "../../Constants/Youtube";
import store from "../../utils/Store";

const Navbar = () => {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState(false);
  const dispatch = useDispatch();
  const { searchSuggestion } = useSelector((store) => store.app);
  const searchVideo = () => {
    dispatch(setCategory(input));
    setInput("");
  };
  const ToggleHandler = () => {
    dispatch(toggleSidebar());
  };

  const showSuggestion = async () => {
    try {
      const res = await axios.get(SEARCH_SUGGESTION_API + input);
      dispatch(setSearchSuggestion(res?.data[1]));
    } catch (error) {
      console.log(error);
    }
  };

  const openSuggestion = () => {
    setSuggestion(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      showSuggestion();
    }, 200);

    return() => {
clearTimeout(timer);
    }

  }, [input]);

  return (
    <div className="fixed top-0 left-0 w-full bg-white p-4 z-50 h-16">
      <div className="flex container mx-auto justify-between items-center">
        <div className="flex items-center cursor-pointer">
          <GiHamburgerMenu onClick={ToggleHandler} size={30} className="ml-3" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt=""
            className="w-[115px] ml-2"
          />
        </div>

        <div className="flex items-center w-[40%]">
          <div className=" flex w-[100%] ">
            <input
              type="text"
              placeholder="search"
              className="w-full outline-none border border-gray-500  px-4 py-2 rounded-l-full hover:border-blue-500"
              value={input}
              onFocus={openSuggestion}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              onClick={searchVideo}
              className="border items-center border-gray-500 rounded-r-full border-l-0 px-4 py-2 bg-gray-300 hover:bg-gray-200"
            >
              <IoIosSearch size="24px" />
            </button>
          </div>
        </div>
        {suggestion && searchSuggestion != 0 && (
          <div
            className="absolute z-50 top-[7px] bg-white w-[34%] py-2 
shadow-lg mt-12 left-[500px] rounded-lg"
          >
            <ul>
              {searchSuggestion.map((text, index) => {
                return (
                  <div
                    className="px-4 hover:bg-gray-100 rounded-lg mx-2 flex items-center"
                    key={index}
                  >
                    <IoIosSearch size="17" />
                    <li className="px-2 py-1 cursor-pointer text-md font-medium">
                      {text}
                    </li>
                  </div>
                );
              })}
            </ul>
          </div>
        )}

        <div className="flex pr-4 gap-3 items-center cursor-pointer">
          <CiVideoOn size={30} />
          <IoIosNotificationsOutline size={30} />
          <Avatar
            src="https://i.pinimg.com/originals/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg"
            size={30}
            round="100px"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
