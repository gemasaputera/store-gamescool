import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MenuNavbar from '../../../constants/menu';
import Auth from './Auth';
import ItemMenu from './ItemMenu';

const Navbar = () => {
  const [menus] = useState(MenuNavbar);
  return (
    <section>
      <nav className="navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">
              <Image src="/icon/logo.svg" width={60} height={60} />
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto text-lg gap-lg-0 gap-2">
              {menus.map((menu) => (
                <ItemMenu {...menu} key={menu.title} />
              ))}
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
};
export default Navbar;
