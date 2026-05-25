import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseStyles = "px-8 py-3.5 rounded-[12px] font-medium transition-all duration-300 flex items-center justify-center tracking-[0.05em] text-sm";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-blue to-secondary-blue text-white hover:opacity-90 hover:shadow-lg hover:shadow-primary-blue/30",
    outline: "bg-transparent border border-white/80 text-white hover:bg-white/10"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
