import React from 'react';

export interface ButtonProps {
    label: string;
    onClick?: () => void;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
    return (
        <button
            className={`rounded-full bg-primary px-24 py-3 m-4 text-xl text-center text-white hover:bg-opacity-60 transition duration-200 font-bold ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export default Button;
