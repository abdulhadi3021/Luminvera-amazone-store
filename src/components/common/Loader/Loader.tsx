import React from 'react';

interface LoaderProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'white';
}

export function Loader({ size = 'md', color = 'primary' }: LoaderProps) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const colors = {
    primary: 'text-blue-500',
    white: 'text-white'
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`
          animate-spin rounded-full border-2 border-t-transparent
          ${sizes[size]}
          ${colors[color]}
        `}
      />
    </div>
  );
}