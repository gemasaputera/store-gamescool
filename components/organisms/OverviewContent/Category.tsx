import Image from 'next/image';
import React, { ReactNode } from 'react';

interface CategoryProps {
  children: ReactNode;
  title: string;
  value: string;
  icon: 'desktop' | 'mobile' | 'other';
}

const Category = ({ children, title, value, icon }: CategoryProps) => (
  <div className="col-lg-4 ps-15 pe-15 pb-lg-0 pb-4">
    <div className="categories-card">
      <div className="d-flex align-items-center mb-24">
        <Image src={`/icon/${icon}.svg`} height={60} width={60} alt="icon" />
        <p className="color-palette-1 mb-0 ms-12">{children}</p>
      </div>
      <div>
        <p className="text-sm color-palette-2 mb-1">{title}</p>
        <p className="text-2xl color-palette-1 fw-medium m-0">{value}</p>
      </div>
    </div>
  </div>
);

export default Category;
