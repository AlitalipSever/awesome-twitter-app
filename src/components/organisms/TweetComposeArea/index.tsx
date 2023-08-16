import React from 'react';
import TweetToolbar from '../../molecules/TweetToolBar';
import UserAvatar from '../../atoms/UserAvatar';

export interface TweetComposeAreaProps {
  tweetText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}
const TweetComposeArea: React.FC<TweetComposeAreaProps> = ({
  onChange,
  onSubmit,
  tweetText,
}) => {
  return (
    <div className="border-t border-b border-gray-300 h-40 flex-row flex px-4">
      <div className="w-16 pt-4">
        <UserAvatar
          avatarUrl={'https://via.placeholder.com/150'}
          username={'ats'}
        />
      </div>
      <div className="flex flex-col w-full">
        <div className="border-b border-gray-300 h-32">
          <input
            type="text"
            placeholder="What's happening?"
            value={tweetText}
            onChange={onChange}
            className="w-full h-16 outline-none border-none py-4"
          />
        </div>
        <TweetToolbar onPost={onSubmit} />
      </div>
    </div>
  );
};

export default TweetComposeArea;
