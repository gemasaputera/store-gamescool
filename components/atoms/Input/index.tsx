import React from 'react';

interface InputProps {
  label: string;
}

const Input = ({ label, ...nativeProps }: InputProps) => (
  <>
    <label
      htmlFor="name"
      className="form-label text-lg fw-medium color-palette-1 mb-10"
    >
      {label}
    </label>
    <input
      className="form-control rounded-pill text-lg"
      aria-describedby="name"
      placeholder="Enter your name"
      {...nativeProps}
    />
  </>
);

export default Input;
