/* eslint-disable react/require-default-props */
import classNames from 'classnames';
import React from 'react';

interface RowProps {
  label: string;
  customClass?: string;
  value: string | number;
}

const Row = ({ label, value, customClass }: RowProps) => {
  const classState = classNames('purchase-details', customClass);
  return (
    <p className="text-lg color-palette-1 mb-20">
      {label}
      <span className={classState}>{value}</span>
    </p>
  );
};

export default Row;
