'use client'
import Image from 'next/image';
import React from 'react'
import { useState, useEffect } from 'react'
import Mobile from './mobile';
import Desktop from './desktop';
import Desk from './desk';
import MobileResponsive from './mobile';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
  <div className="fixed w-full -mt-10  block">
    <div className="sm:hidden md:hidden lg:visible xl:visible 2xl:visible">
      <Desk />
    </div>
    <div className="sm:visible md:visible lg:hidden xl:hidden 2xl:hidden">
      <MobileResponsive />
    </div>
  </div>
  )
}

export default Header