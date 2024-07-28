import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../../utils/AppSlice";

const Buttonlist = [
  "All",
  "Latest",
  "Web Series",
  "Mixes",
  "Trillers",
  "Live",
  "Comedy",
  "Standup",
  "Vlogs",
  "Music",
  "DSA",
  "Football",
  "Cricket",
  "Bollywood",
  "Gully Cricket",
  "Bhajan",
  "Tollywood",
  "Computer Programming",
  "JavaScript",
  "Badminton",
  "PHP",
  "React Routers",
  "Gaming",
  "Movie Musicals",
  "Gadgets",
  "Asian Music",
  "Indian Pop Music",
  "Public Speaking",
  "Recently Uploaded",
  "Watched",
  "New to you",
];

const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();
  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  };
console.log(active);
  return (
    <div>
      <div className="flex overflow-x-scroll mt-6 no-scrollbar">
        {Buttonlist.map((buttonName, index) => {
          return (
            <div key={index}>
              <button
                onClick={() => videoByTag(buttonName)}
                className={`px-5 py-1 rounded-full mx-2 font-medium ${active === buttonName ? 'bg-black text-white' : 'bg-gray-300'}`}
              >
                <span className="whitespace-nowrap"> {buttonName}</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ButtonList;
