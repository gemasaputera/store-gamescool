import Image from 'next/image';
import React from 'react';

interface Props {
  title1: string;
  title2?: string;
  category: string;
  thumbnail?: string;
  type: 'desktop' | 'mobile';
}

function TopUpItem({ title1, title2, category, thumbnail, type }: Props) {
  if (type === 'desktop') {
    return (
      <div className="pb-50 d-md-block d-none">
        <h2 className="text-4xl fw-bold color-palette-1 text-start mb-10 mt-10">
          {title1}
          <br />
          {title2}
        </h2>
        <p className="text-lg color-palette-2 mb-0">Category: {category}</p>
      </div>
    );
  }

  return (
    <div className="row align-items-center">
      <div className="col-md-12 col-4">
        <Image
          src={`/img/${thumbnail}.png`}
          width={280}
          height={380}
          className="img-fluid"
          alt=""
        />
      </div>
      <div className="col-md-12 col-8 d-md-none d-block">
        <h2 className="text-xl fw-bold color-palette-1 text-start mb-10">
          {title1}
          <br />
          {title2}
        </h2>
        <p className="text-sm color-palette-2 text-start mb-0">
          Category: {category}
        </p>
      </div>
    </div>
  );
}

export default TopUpItem;
