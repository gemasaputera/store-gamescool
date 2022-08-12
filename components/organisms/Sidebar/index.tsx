import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  ViewGridIcon,
  ShoppingBagIcon,
  ChatIcon,
  CreditCardIcon,
  SparklesIcon,
  CogIcon,
  LogoutIcon
} from '@heroicons/react/outline';
import Profile from './Profile';
import Footer from './Footer';
import MenuItem from './MenuItem';

interface SidebarProps {
  activeMenu:
    | 'Overview'
    | 'Transactions'
    | 'Messages'
    | 'Rewards'
    | 'Card'
    | 'Settings';
}

const Sidebar = ({ activeMenu }: SidebarProps) => {
  const [menus] = useState([
    {
      title: 'Overview',
      url: '/member',
      iconMenu: <ViewGridIcon />,
      active: false
    },
    {
      title: 'Transactions',
      url: '/member/transaction',
      iconMenu: <ShoppingBagIcon />,
      active: false
    },
    {
      title: 'Messages',
      url: '',
      iconMenu: <ChatIcon />,
      active: false
    },
    {
      title: 'Card',
      url: '',
      iconMenu: <CreditCardIcon />,
      active: false
    },
    {
      title: 'Rewards',
      url: '',
      iconMenu: <SparklesIcon />,
      active: false
    },
    {
      title: 'Settings',
      url: '/member/edit-profile',
      iconMenu: <CogIcon />,
      active: false
    },
    {
      title: 'Log Out',
      url: '',
      iconMenu: <LogoutIcon />,
      active: false
    }
  ]);

  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          {menus.map((menu) => (
            <MenuItem
              {...menu}
              active={activeMenu === menu.title}
              key={menu.title}
            />
          ))}
        </div>
        <Footer />
      </div>
    </section>
  );
};

Sidebar.defaultProps = { active: false };

Sidebar.propTypes = { active: PropTypes.bool };

export default Sidebar;
