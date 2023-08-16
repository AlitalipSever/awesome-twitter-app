import React from 'react';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  className,
  size = 'medium',
}) => {
  let textSize = 'text-xl';
  let padding = 'px-24 py-3';

  switch (size) {
    case 'small':
      textSize = 'text-base';
      padding = 'px-4 py-1';
      break;
    case 'large':
      textSize = 'text-2xl';
      padding = 'px-28 py-4';
      break;
    case 'medium':
    default:
      textSize = 'text-xl';
      padding = 'px-24 py-3';
      break;
  }

  return (
    <button
      className={`rounded-full bg-primary ${textSize} ${padding} m-4 text-center text-white hover:bg-opacity-60 transition duration-200 font-bold ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
