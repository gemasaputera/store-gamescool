import Link from 'next/link';
import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

interface Props {
  title: string;
  link: string;
  active?: boolean;
}

const ItemMenu = ({ title, link, active }: Props) => {
  const classTitle = cx('nav-link', { active });
  return (
    <li className="nav-item my-auto">
      <Link href={link}>
        <a className={classTitle}>{title}</a>
      </Link>
    </li>
  );
};

ItemMenu.defaultProps = {
  title: '',
  link: '',
  active: false
};

ItemMenu.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  active: PropTypes.bool
};

export default ItemMenu;
