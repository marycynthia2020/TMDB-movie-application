import { useTheme } from '@/providers/ThemeProvider';
import React from 'react'
import { IoMoon } from "react-icons/io5";
import { IoMdSunny } from "react-icons/io";

const ToggleBtn = () => {
  const {theme, toggleTheme} = useTheme()
  return (
    <div className='cursor-pointer px-2  py-3 text-xs rounded-md border-2 border-gray-300 dark:border-gray-500 dark:bg-[#364150] w-fit hover:text-blue-600 dark:text-gray-300' onClick={toggleTheme}>
        {theme === "light"? <IoMoon /> : <IoMdSunny /> }
    </div>
  )
}

export default ToggleBtn