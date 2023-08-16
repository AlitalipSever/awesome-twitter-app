import React from 'react';
import { FaImage, FaGift, FaPollH, FaMapMarkerAlt } from 'react-icons/fa';
import Button from '../Button';

interface ToolbarProps {
  onAddPhoto?: () => void;
  onAddGif?: () => void;
  onAddPoll?: () => void;
  onAddLocation?: () => void;
  onPost?: () => void;
}

const TweetToolbar: React.FC<ToolbarProps> = ({
  onAddPhoto,
  onAddGif,
  onAddPoll,
  onAddLocation,
  onPost,
}) => {
  return (
    <div
      className="flex items-center justify-between p-2 border-t h-16"
      data-testid="toolBar"
    >
      <div className="flex space-x-4">
        <button
          onClick={onAddPhoto}
          className="text-gray-500 hover:text-blue-500"
        >
          <FaImage size={20} />
        </button>
        <button
          onClick={onAddGif}
          className="text-gray-500 hover:text-blue-500"
        >
          <FaGift size={20} />
        </button>
        <button
          onClick={onAddPoll}
          className="text-gray-500 hover:text-blue-500"
        >
          <FaPollH size={20} />
        </button>
        <button
          onClick={onAddLocation}
          className="text-gray-500 hover:text-blue-500"
        >
          <FaMapMarkerAlt size={20} />
        </button>
      </div>
      <Button label={'Post'} onClick={onPost} size={'small'} />
    </div>
  );
};

export default TweetToolbar;
