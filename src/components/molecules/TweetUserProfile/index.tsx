import React from 'react';

interface UserProfileProps {
  username: string;
  handle: string;
  timestamp: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  username,
  handle,
  timestamp,
}) => {
  return (
    <div className="flex items-center">
      <span className="font-bold">{username}</span>
      <span className="ml-2 text-gray-500">@{handle}</span>
      <span className="ml-2 text-gray-400 text-sm">{timestamp}</span>
    </div>
  );
};

export default UserProfile;
