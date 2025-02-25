'use client';

import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`max-w-[1280px] w-[90%] mx-auto ${className}`}>
      {children}
    </div>
  );
}
