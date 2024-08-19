import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownClick = (nav) => {
    setActive(nav.title);
    if (nav.dropdown) {
      setDropdownOpen(!dropdownOpen);
    } else {
      setDropdownOpen(false);
    }
  };

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${scrolled ? 'bg-primary' : 'bg-transparent'}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to='/' className='flex items-center space-x-2' onClick={() => { setActive('Home'); window.scrollTo(0, 0); setDropdownOpen(false); }}>
          <p className='text-white text-2xl font-bold cursor-pointer'>OctaCore Technologies</p>
        </Link>

        <ul className='hidden sm:flex space-x-10'>
          {navLinks.map((nav) => (
            <li key={nav.id} className={`relative ${active === nav.title ? 'text-white' : 'text-secondary'} hover:text-white text-xl font-medium cursor-pointer`} onClick={() => handleDropdownClick(nav)}>
              <Link to={nav.to}>{nav.title}</Link>
              {nav.dropdown && dropdownOpen && (
                <ul className='absolute top-full left-0 mt-2 bg-primary rounded-md shadow-lg'>
                  {nav.subLinks.map((subLink) => (
                    <li key={subLink.id} className='px-4 py-2 hover:bg-secondary'>
                      <Link to={subLink.to} onClick={() => { setActive(subLink.title); setDropdownOpen(false); }}>
                        {subLink.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu} alt='menu' className='w-8 h-8 object-contain' onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-48 z-10 rounded-xl`}>
            <ul className='flex flex-col gap-4'>
              {navLinks.map((nav) => (
                <li key={nav.id} className={`font-poppins font-medium cursor-pointer text-lg ${active === nav.title ? 'text-white' : 'text-secondary'}`} onClick={() => { setToggle(!toggle); handleDropdownClick(nav); }}>
                  <Link to={nav.to}>{nav.title}</Link>
                  {nav.dropdown && dropdownOpen && (
                    <ul className='pl-4'>
                      {nav.subLinks.map((subLink) => (
                        <li key={subLink.id} className='mt-2'>
                          <Link to={subLink.to} onClick={() => { setToggle(!toggle); setActive(subLink.title); setDropdownOpen(false); }}>{subLink.title}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
