import React from "react";
import LikeIcon from "./LikeIcon";

interface LikeButtonProps {
  action: () => void;
  isLiked: boolean;
}

const LikeButton = ({ isLiked, action }: LikeButtonProps) => {
  return (
    <button className="flex gap-1 bg-blue-500 p-1.5" onClick={action}>
      <span className="">Like</span> <LikeIcon size={24} filled={isLiked} />
    </button>
  );
};

export default LikeButton;
