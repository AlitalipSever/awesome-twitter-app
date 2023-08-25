import React from 'react';
import { Link } from 'react-router-dom';
import { BsBell, BsBookmark, BsEnvelope, BsTwitter } from 'react-icons/bs';
import { BiHomeCircle, BiSearch } from 'react-icons/bi';
import { FaUserAstronaut } from 'react-icons/fa';
import Button from '../../molecules/Button';

interface NavItem {
  title: string;
  icon: React.ComponentType;
}
export const NAVIGATION_ITEMS: NavItem[] = [
  {
    title: 'Home',
    icon: BiHomeCircle,
  },
  {
    title: 'Explore',
    icon: BiSearch,
  },
  {
    title: 'Notifications',
    icon: BsBell,
  },
  {
    title: 'Messages',
    icon: BsEnvelope,
  },
  {
    title: 'Bookmarks',
    icon: BsBookmark,
  },
  {
    title: 'Profile',
    icon: FaUserAstronaut,
  },
];

const LeftSideBar: React.FC = () => {
  return (
    <section className="fixed w-72 flex flex-col h-screen space-y-4 my-4">
      <Link to={'/'}>
        <div className="hover:bg-primary transition duration-200 rounded-3xl p-3 ml-3 w-fit text-2xl">
          <BsTwitter />
        </div>
      </Link>
      <div>
        {NAVIGATION_ITEMS.map((item) => (
          <Link
            className="hover:bg-gray-100 transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6 text-2xl font-bold"
            to={`/${item.title.toLowerCase()}`}
            key={item.title}
            aria-label={item.title}
          >
            <item.icon />
            <div>{item.title}</div>
          </Link>
        ))}
        <Button label={'Post'} />
      </div>
    </section>
  );
};

export default LeftSideBar;
