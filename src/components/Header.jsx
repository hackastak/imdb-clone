import React from 'react';
import Link from 'next/link';
import { AiFillHome } from 'react-icons/ai';
import { BsFillInfoCircleFill } from 'react-icons/bs';

import MenuItem from './MenuItem';
import DarkModeSwitch from './DarkModeSwitch';

export default function Header() {
  return (
    <div className='flex justify-between px-2 max-w-6xl sm:mx-auto items-center py-6'>
      <div className='flex'>
        <MenuItem title='Home' address='/' Icon={AiFillHome} />
        <MenuItem title='About' address='/about' Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex items-center space-x-5 mr-1'>
        <DarkModeSwitch />
        <Link href='/'>
          <h2 className='text-2xl'>
            <span className='font-bold dark:bg-cyan-600 bg-cyan-300 py-1 px-2 rounded-lg mr-1'>
              IMDb
            </span>
            <span className='text-xl hidden sm:inline'>Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
}
