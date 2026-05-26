import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'full' | 'none';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', rounded = 'lg', children, className = '', ...props }: ButtonProps) {
  const baseStyles = `px-8 py-3.5 rounded-${rounded} font-medium transition-all duration-300 flex items-center justify-center tracking-[0.05em] text-sm`;
  
  const variants = {
    primary: "bg-gradient-to-r from-primary-blue to-secondary-blue text-text-main hover:opacity-90 hover:shadow-lg hover:shadow-primary-blue/30 border border-transparent",
    outline: "bg-transparent border border-text-main/80 text-text-main hover:bg-text-main/10"
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
