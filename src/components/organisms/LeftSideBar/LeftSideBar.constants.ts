import { BiHomeCircle, BiSearch } from 'react-icons/bi';
import { BsBell, BsBookmark, BsEnvelope } from 'react-icons/bs';
import { FaUserAstronaut } from 'react-icons/fa';
import { NavItem } from './LeftSideBar.types';

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
