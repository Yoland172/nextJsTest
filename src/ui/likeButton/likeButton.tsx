import React from "react";
import LikeIcon from "./likeIcon";

interface LikeButtonProps {
  isLiked: boolean;
}

const LikeButton = ({ isLiked }: LikeButtonProps) => {
  return (
    <button className="flex gap-1">
      <span>Like</span> <LikeIcon size={24} filled={isLiked}/>
    </button>
  );
};

export default LikeButton;
