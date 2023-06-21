import React, { Fragment, useState } from 'react';
import { FiBluetooth } from 'react-icons/fi';
import { BiWifi } from 'react-icons/bi';
import { SiNfc } from 'react-icons/si';
import { AiFillHome } from 'react-icons/ai';
import { RiHotspotLine } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { isMobile } from '../helpers/isMobile';

const Navigation = () => {
  const [extend, setExtend] = useState(false);

  return (
    <Fragment>
      <div
        onMouseLeave={() => {
          setExtend(false);
        }}
        className='w-[300px]'
      >
        <div
          onMouseEnter={() => {
            if (isMobile()) return;
            setExtend(true);
          }}
          onClick={() => {
            if (!isMobile()) {
              return;
            } else {
              setExtend((prev) => !prev);
            }
          }}
          className={`z-[100] fixed w-[100px] md:w-[300px] -left-[50px] md:-left-[250px] h-[50px]  bg-orange-400 flex items-center duration-200 ${
            extend && 'md:translate-x-[250px]'
          }`}
        >
          <span className='text-4xl cursor-pointer p-1 absolute right-0 mr-[5px] -mt-1'>
            &#9776;
          </span>
        </div>
        <div
          className={`z-[100] flex justify-center fixed top-[50px] -left-[50px] md:-left-[300px] w-[50px] md:w-[300px] h-full bg-orange-400 duration-200 ${
            extend && 'translate-x-[50px] md:translate-x-[300px]'
          }`}
        >
          <ul className='p-10 space-y-4 flex flex-col items-center md:items-start'>
            <li>
              <NavLink to='/' className='flex items-center'>
                <AiFillHome className='md:mr-4' />
                <span className='hidden md:block tracking-widest'>home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/bluetooth' className='flex items-center'>
                <FiBluetooth className='md:mr-4' />
                <span className='hidden md:block tracking-widest'>bluetooth</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/wifi' className='flex items-center'>
                <BiWifi className='md:mr-4' />
                <span className='hidden md:block tracking-widest'>wifi</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/nfc' className='flex items-center'>
                <SiNfc className='md:mr-4' />
                <span className='hidden md:block tracking-widest'>nfc</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='/hotspot' className='flex items-center'>
                <RiHotspotLine className='md:mr-4' />
                <span className='hidden md:block tracking-widest'>hotspot</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Navigation;
