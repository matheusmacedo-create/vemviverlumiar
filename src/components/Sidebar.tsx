import React from 'react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  children: React.ReactNode;
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
  return (
    <aside className={cn("space-y-6", className)}>
      {children}
    </aside>
  );
};

export default Sidebar;