import React from 'react';
import TweetActions from '../../molecules/TweetActions';
import UserProfile from '../../molecules/TweetUserProfile';
import UserAvatar from '../../atoms/UserAvatar';
import { Tweet as TweetType } from '../../../types/Tweet';

export interface TweetProps extends TweetType {
  onLikeToggle: (id: string) => void;
}

const Tweet: React.FC<TweetProps> = ({
  id,
  username,
  handle,
  content,
  timestamp,
  avatarUrl,
  onLikeToggle,
  liked,
}) => {
  return (
    <div className="border-b p-4 mx-auto mt-4">
      <div className="flex">
        <UserAvatar avatarUrl={avatarUrl} username={username} />
        <div className="flex-1">
          <UserProfile
            username={username}
            handle={handle}
            timestamp={timestamp}
          />
          <p className="mt-2">{content}</p>
          <TweetActions onLikeToggle={onLikeToggle} id={id} liked={liked} />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
