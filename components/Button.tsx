import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  fullWidth = false,
  ...props 
}) => {
  // Removed rounded-lg
  const baseStyles = 'inline-flex items-center justify-center font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 tracking-wide uppercase text-sm';
  
  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white border border-transparent shadow-md hover:shadow-lg',
    secondary: 'bg-white text-primary border border-primary hover:bg-gray-50 hover:text-primary-dark',
    outline: 'bg-transparent border border-white text-white hover:bg-white hover:text-primary',
    ghost: 'bg-transparent text-primary hover:bg-gray-100',
  };

  const sizes = {
    sm: 'px-4 py-2',
    md: 'px-6 py-3',
    lg: 'px-8 py-4 text-base',
  };

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;