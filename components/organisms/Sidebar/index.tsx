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

const Sidebar = () => {
  const [menus] = useState([
    {
      title: 'Overview',
      url: '',
      iconMenu: <ViewGridIcon />,
      active: true
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
      url: '',
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
            <MenuItem {...menu} key={menu.title} />
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
