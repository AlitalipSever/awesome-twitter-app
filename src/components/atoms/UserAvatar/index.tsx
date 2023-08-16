import React from 'react';

export interface UserAvatarProps {
  avatarUrl: string;
  username: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ avatarUrl, username }) => {
  return (
    <img
      src={avatarUrl}
      alt={`${username}'s avatar`}
      className="w-12 h-12 rounded-full mr-4"
    />
  );
};

export default UserAvatar;
