import Image from 'next/image';
import React from 'react';

const Profile = () => (
  <div className="user text-center pb-50 pe-30">
    <Image
      src="/img/avatar-1.png"
      alt=""
      width={90}
      height={90}
      className="img-fluid mb-20"
    />
    <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2>
    <p className="color-palette-2 m-0">shayna@anne.com</p>
  </div>
);

export default Profile;
