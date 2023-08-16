import React from 'react';
import TweetActions from '../../molecules/TweetActions';
import UserProfile from '../../molecules/TweetUserProfile';
import UserAvatar from '../../atoms/UserAvatar';

interface TweetProps {
  username: string;
  handle: string;
  content: string;
  timestamp: string;
  avatarUrl: string;
}

const Tweet: React.FC<TweetProps> = ({
  username,
  handle,
  content,
  timestamp,
  avatarUrl,
}) => {
  return (
    <div className="border-b border-t p-4 mx-auto mt-4">
      <div className="flex">
        <UserAvatar avatarUrl={avatarUrl} username={username} />
        <div className="flex-1">
          <UserProfile
            username={username}
            handle={handle}
            timestamp={timestamp}
          />
          <p className="mt-2">{content}</p>
          <TweetActions />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
