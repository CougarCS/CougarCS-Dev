import React, { useState } from 'react';

const NavBar = () =>
{
  const [isNavbarOpen, setisNavbarOpen] = useState(false);

  const toggleMenu = () =>
  {
    setisNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1E1F22F2] z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center sm:justify-around sm:gap-x-2">
        <div className="flex min-w-fit gap-2 items-center">
          <img src="/cougarLogo.svg" alt="Logo" />
          <img src="/cougarCSText.svg" alt="CougarCS" />
        </div>
        <span className='max-sm:hidden'>
          <NavBarHamburgerItems isOpen={true} />
        </span>
        <span className='sm:hidden lg:inline'>
          <MembershipButton />
        </span>
        <span className='sm:hidden'>
          <NavBarHamburgerButton isOpen={isNavbarOpen} toggleOpen={toggleMenu} />
        </span>
      </div>

      {/* */}
      <div className='hidden p-1 text-right w-full bg-white bg-opacity-5 sm:block lg:hidden'>
        <MembershipButton />
      </div>
      <span className='sm:hidden'>
        <NavBarHamburgerItems isOpen={isNavbarOpen} />
      </span>
    </nav>
  );
};


const NavBarHamburgerButton = ({ isOpen, toggleOpen }) =>
{
  return (
    <div
      className={`flex flex-col w-8 h-6 justify-between cursor-pointer ${isOpen ? 'text-gray-900' : 'text-gray-700'}`}
      onClick={toggleOpen}
    >
      <div className={`w-full h-1 bg-gray-200 rounded-md transition-transform ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
      <div className={`w-full h-1 bg-gray-200 rounded-md ${isOpen ? 'opacity-0' : ''}`} />
      <div className={`w-full h-1 bg-gray-200 rounded-md transition-transform ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
    </div>
  );
};

const NavBarHamburgerItems = ({ isOpen }) =>
{
  return (<div
    className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-1 border-y-2 border-neutral-300 w-full bg-neutral-100 sm:flex-row sm:bg-transparent sm:border-none`}
  >
    <a href="#" className="px-4 py-2.5 bg-neutral-50 text-gray-700 sm:bg-transparent sm:rounded-xl sm:text-white hover:sm:bg-opacity-5 hover:bg-neutral-100 sm:px-2">Home</a>
    <a href="#" className="px-4 py-2.5 bg-neutral-50 text-gray-700 sm:bg-transparent sm:rounded-xl sm:text-white hover:sm:bg-opacity-5 hover:bg-neutral-100 sm:px-2">Events</a>
    <a href="#" className="px-4 py-2.5 bg-neutral-50 text-gray-700 sm:bg-transparent sm:rounded-xl sm:text-white hover:sm:bg-opacity-5 hover:bg-neutral-100 sm:px-2">Branches</a>
    <a href="#" className="px-4 py-2.5 bg-neutral-50 text-gray-700 sm:bg-transparent sm:rounded-xl sm:text-white hover:sm:bg-opacity-5 hover:bg-neutral-100 sm:px-2">Contact Us</a>
    <a href="#" className="px-4 py-2.5 bg-neutral-50 text-gray-700 sm:bg-transparent sm:rounded-xl sm:text-white hover:sm:bg-opacity-5 hover:bg-neutral-100 sm:px-2">Docs</a>
    <a href="#" className="px-4 py-2.5 bg-neutral-50 text-gray-700 sm:bg-transparent sm:rounded-xl sm:text-white hover:sm:bg-opacity-5 hover:bg-neutral-100 sm:px-2">CodeRED</a>
  </div>);
};

const MembershipButton = () =>
{
  return (<button className='bg-[#C80F2E] px-6 py-1.5 rounded-sm box-border border-[1.5px] border-white border-opacity-25 text-white'>
    Become A Member
  </button>);
};

export default NavBar;
