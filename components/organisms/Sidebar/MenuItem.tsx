import Link from 'next/link';
import { ReactNode } from 'react';

interface ItemProps {
  iconMenu: ReactNode;
  title: string;
  url: string;
  active: boolean;
}

const MenuItem = ({ iconMenu, title, url, active }: ItemProps) => (
  <div className={`item mb-30 ${active ? 'active' : ''}`}>
    <span
      className="icon me-3"
      style={{
        height: 25,
        width: 25,
        color: active ? 'initial' : '#7E8CAC'
      }}
    >
      {iconMenu}
    </span>
    <p className="item-title m-0">
      <Link href={url}>
        <a className="text-lg text-decoration-none">{title}</a>
      </Link>
    </p>
  </div>
);

export default MenuItem;
