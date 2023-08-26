import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import Button from '../../molecules/Button';
import { activeClasses, baseClasses } from './LeftSideBar.styles';
import { NAVIGATION_ITEMS } from './LeftSideBar.constants';

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
          <NavLink
            className={({ isActive }) =>
              isActive ? activeClasses : baseClasses
            }
            draggable={true}
            to={`/${item.title.toLowerCase()}`}
            key={item.title}
            aria-label={item.title}
          >
            <item.icon />
            <div>{item.title}</div>
          </NavLink>
        ))}
        <Button label={'Post'} />
      </div>
    </section>
  );
};

export default LeftSideBar;
