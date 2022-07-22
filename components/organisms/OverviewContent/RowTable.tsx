import React from 'react';
import classnames from 'classnames';

interface RowProps {
  title: string;
  category: string;
  item: number;
  price: number;
  status: 'Success' | 'Pending' | 'Failed';
  image: string;
}

const RowTable = ({
  title,
  image,
  category,
  item,
  price,
  status
}: RowProps) => {
  const Classnames = classnames('float-start icon-status', {
    pending: status === 'Pending',
    success: status === 'Success',
    failed: status === 'Failed'
  });

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
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
          <span className={Classnames} />
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default RowTable;
