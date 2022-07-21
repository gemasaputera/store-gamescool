import Link from 'next/link';
import React from 'react';

interface LinkProps {
  title: string;
  link: string;
}

interface Props {
  title: string;
  link: LinkProps[];
}

const FooterNavigation = ({ title, link }: Props) => (
  <div className="col-md-4 col-6 mb-lg-0 mb-25">
    <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
    <ul className="list-unstyled">
      {link.map((item) => (
        <li className="mb-6" key={item.link}>
          <Link href={item.link}>
            <a className="text-lg color-palette-1 text-decoration-none">
              {item.title}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterNavigation;
