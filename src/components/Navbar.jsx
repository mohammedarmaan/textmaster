// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-switch';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-white dark:bg-tm-400 shadow-md py-4 top-0 sticky">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center space-x-8">
          <Link to='/' className=" text-2xl  text-gray-800 dark:text-white">
            TextMaster
          </Link>
          {/* <Link to="/home" className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white">
            Home
          </Link>
          <Link to="/about" className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white">
            About
          </Link>
          <Link to="/image-to-text" className="text-gray-800 dark:text-gray-300 hover:text-gray-600 dark:hover:text-white">
            Text from Image
          </Link> */}
        </div>
        <div className="flex items-center">
          <Switch
            onChange={handleThemeChange}
            checked={darkMode}
            offColor="#cbd5e1"
            onColor="#333"
            uncheckedIcon={false}
            checkedIcon={false}
            className="react-switch"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
