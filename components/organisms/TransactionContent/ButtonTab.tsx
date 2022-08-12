/* eslint-disable no-unused-vars */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
import classNames from 'classnames';
import React from 'react';

export interface PropsButton {
  title: string;
  active?: boolean;
  handleClick?: any;
}

const ButtonTab = ({ title, active, handleClick }: PropsButton) => {
  const classState = classNames('btn btn-status rounded-pill text-sm  me-3', {
    'btn-active': active
    // eslint-disable-next-line object-curly-newline
  });

  console.log('handleClick', handleClick);

  return (
    <button
      data-filter="*"
      className={classState}
      onClick={() => handleClick(title)}
    >
      {title}
    </button>
  );
};

export default ButtonTab;
