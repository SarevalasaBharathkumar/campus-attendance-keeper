
import React from 'react';
import { UserRound } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold">Campus Attendance Keeper</h1>
        <div className="flex items-center space-x-2">
          <span>Admin</span>
          <UserRound size={24} />
        </div>
      </div>
    </header>
  );
};

export default Header;
