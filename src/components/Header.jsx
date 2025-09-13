import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-lg rounded-lg mx-4 mt-8 mb-6">
      <div className="px-8 py-6">
        <h1 className="text-4xl font-bold text-gray-800 text-center">
          ✨ My Todo List
        </h1>
        <p className="text-gray-600 text-center mt-2">
          Stay organized and get things done
        </p>
      </div>
    </header>
  );
};

export default Header;
