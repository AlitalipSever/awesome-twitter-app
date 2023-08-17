import React from 'react';
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaShareSquare,
  FaHeart,
} from 'react-icons/fa';

interface TweetActionProps {
  onLikeToggle: (id: string) => void;
  id: string;
  liked: boolean;
}

const TweetActions: React.FC<TweetActionProps> = ({
  onLikeToggle,
  id,
  liked,
}) => {
  const onClickHandler = () => {
    onLikeToggle(id);
  };
  return (
    <div className="flex justify-between mt-4 text-gray-500">
      <button className="flex items-center gap-2 hover:text-blue-500">
        <div className="p-2 rounded-full hover:bg-blue-100">
          <FaRegComment size={20} />
        </div>
        <span>Reply</span>
      </button>
      <button className="flex items-center gap-2 hover:text-green-500">
        <div className="p-2 rounded-full hover:bg-green-100">
          <FaRetweet size={20} />
        </div>
        <span>Retweet</span>
      </button>
      <button
        className="flex items-center gap-2 hover:text-red-500"
        onClick={onClickHandler}
      >
        <div className="p-2 rounded-full hover:bg-red-100">
          {liked ? <FaHeart size={20} color="red" /> : <FaRegHeart size={20} />}
        </div>
        <span>Like</span>
      </button>
      <button className="flex items-center gap-2 hover:text-purple-500">
        <div className="p-2 rounded-full hover:bg-purple-100">
          <FaShareSquare size={20} />
        </div>
        <span>Share</span>
      </button>
    </div>
  );
};

export default TweetActions;
