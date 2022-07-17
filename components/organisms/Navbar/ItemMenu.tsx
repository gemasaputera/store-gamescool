import Link from 'next/link';
import React from 'react';
import cx from 'classnames';

interface Props {
  title: string;
  link: string;
  active?: boolean;
}

function ItemMenu({ title, link, active }: Props) {
  const classTitle = cx('nav-link', {
    active,
  });
  return (
    <li className="nav-item my-auto">
      <Link href={link}>
        <a className={classTitle}>{title}</a>
      </Link>
    </li>
  );
}

export default ItemMenu;
