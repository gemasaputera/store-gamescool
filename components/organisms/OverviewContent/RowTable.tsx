/* eslint-disable object-curly-newline */
import Image from 'next/image';
import React from 'react';

interface RowProps {
  title: string;
  category: string;
  item: number;
  price: number;
  status: string;
  img: string;
}

const RowTable = ({ title, img, category, item, price, status }: RowProps) => (
  <tr className="align-middle">
    <th scope="row">
      <Image
        className="float-start me-3 mb-lg-0 mb-3"
        src={`/img/${img}.png`}
        width={80}
        height={60}
        alt="game thumbnail"
      />
      <div className="game-title-header">
        <p className="game-title fw-medium text-start color-palette-1 m-0">
          {title}
        </p>
        <p className="text-xs fw-normal text-start color-palette-2 m-0">
          {category}
        </p>
      </div>
    </th>
    <td>
      <p className="fw-medium color-palette-1 m-0">{item} Gold</p>
    </td>
    <td>
      <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
    </td>
    <td>
      <div>
        <span className="float-start icon-status pending" />
        <p className="fw-medium text-start color-palette-1 m-0 position-relative">
          {status}
        </p>
      </div>
    </td>
  </tr>
);

export default RowTable;
