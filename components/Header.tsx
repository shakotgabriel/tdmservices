"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';


const MENU_ITEMS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/Services',
    submenu: [
      { label: 'TECHNOLOGY & IT SOLUTIONS', href: '/IT' },
      { label: 'IMPORT & EXPORT SERVICES', href: '/import' },
      { label: 'GRAPHIC DESIGN ', href: '/graphic-design' },
      { label: 'CAR SHADES & CANOPIES', href: '/cars' },
      { label: 'SUPPLY OF MEDICAL EQUIPMENT', href: '/medical' },
    
      { label: 'GENERAL PRINTING', href: '/general-printing' },
      
      { label: 'STARLINK', href: '/starlink' },
      { label: 'LOGISTICS & TRANSPORTATION', href: '/logistics' }
    ]
  },
  
  { label: 'Gallery', href: '/Gallery' },
  { label: 'About', href: '/About' },
  { label: 'Contact Us', href: '/Contacts'  }
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className = '' }) => (
  <a 
    href={href} 
    className={`block py-2 px-4 hover:bg-fresh
    hover:text-white rounded-xl transition-all duration-300 ${className}`}
  >
    {children}
  </a>
);

const MenuIcon = () => (
  <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
    <span className="block w-full h-0.5 bg-current"></span>
    <span className="block w-full h-0.5 bg-current"></span>
    <span className="block w-full h-0.5 bg-current"></span>
  </div>
);

const CloseIcon = () => (
  <div className="w-6 h-6 relative rotate-45">
    <span className="block absolute top-1/2 w-6 h-0.5 bg-current -translate-y-1/2"></span>
    <span className="block absolute left-1/2 h-6 w-0.5 bg-current -translate-x-1/2"></span>
  </div>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header 
      className={`sticky top-2 w-full transition-all duration-300 z-50
      ${scrolled ? 'bg-white border-8 border-fresh shadow-lg backdrop-blur-md rounded-xl' : 'bg-white'}`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center">
          {/* Logo - Fixed on the left */}
          <div className="w-[150px]">
            <a href="/" className="block">
              <Image
                src="/images/TDMLOGO.png"
                alt="Company Logo"
                width={150}
                height={50}
                className="object-contain"
                priority
              />
            </a>
          </div>

          {/* Mobile Menu Button - Visible only on mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 ml-auto md:hidden"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          {/* Navigation Links - Centered on desktop */}
          <div className={`
            absolute top-full left-0 w-full md:static
            ${isOpen ? 'block' : 'hidden'} md:block
            bg-fresh md:bg-transparent shadow-lg md:shadow-none
            transition-all duration-200 ease-in-out
            md:flex-1 font-black
          `}>
            <ul className="flex flex-col md:flex-row md:justify-center md:items-center p-4 md:p-0">
              {MENU_ITEMS.map((item) => (
                <li key={item.label} className={`relative group ${item.submenu ? 'md:hover:bg-fresh  md:rounded-xl' : ''}`}>
                  {item.submenu ? (
                    <>
                      <a
                        href={item.href}
                        className="w-full flex items-center justify-between py-2 px-4 
                        transition-all duration-300 text-black md:hover:text-white"
                      >
                        {item.label}
                      </a>
                      <div className="
                        hidden md:group-hover:block
                        md:absolute md:left-1/2 md:mt-0
                        md:-translate-x-1/2 
                        bg-white rounded-xl shadow-lg
                        transition-all duration-200 ease-in-out
                        p-4
                        md:invisible md:group-hover:visible
                        md:opacity-0 md:group-hover:opacity-100
                        md:translate-y-2 md:group-hover:translate-y-0
                        w-[1000px] 
                      ">
                        <ul className="grid grid-cols-2 gap-2">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.label}>
                              <NavLink href={subItem.href} className="text-sm text-center whitespace-normal h-full text-gray-700">
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <NavLink href={item.href}>
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;