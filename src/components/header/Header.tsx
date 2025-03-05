import React from "react";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10"></div>
          <div className="w-1/3"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
