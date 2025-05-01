import React from 'react';

const MountainLogo = ({ color = "#fff", size = 40 }) => {
  return (
    <svg 
      width={size} 
      height={size * 0.75} 
      viewBox="0 0 40 30" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Mountain Peak minimalist logo */}
      <path 
        d="M20 2L30 18L36 12L40 30H0L8 20L14 25L20 2Z" 
        fill={color} 
      />
    </svg>
  );
};

export default MountainLogo;