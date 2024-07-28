import React from "react";
import Avatar from "react-avatar";

const ChatMessage = ({item}) => {
  return (
    <div className="flex items-center mb-2">
      <div className="">
      <Avatar
            src="https://i.pinimg.com/originals/6d/5f/c6/6d5fc60bae3dc6139eefa31af206596f.jpg"
            size={30}
            round="100px"
          />
      </div>
      <div className="flex items-center">
        <h1 className="ml-2 text-sm font-semibold">
            {item.name}
        </h1>
        <p className="ml-2">{item.message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
