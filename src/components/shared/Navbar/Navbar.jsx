import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/logo.svg';
import useAuth from '@/hooks/useAuth';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth()



  const navLinkClass = ({ isActive }) =>
    `text-xl relative before:absolute before:content-[""] before:bg-[#003646] before:h-0.75 before:left-0 before:duration-400 hover:scale-105 transition-all duration-400 before:-bottom-[4px] hover:before:w-full
    ${isActive ? 'text-primary before:w-full' : 'text-gray-800 before:w-0'}`;



  return (
    <section className="relative">
      <nav className="flex justify-between items-center wrapper py-3">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <ul className="flex gap-8 items-center">
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/notice" className={navLinkClass}>Notice</NavLink></li>
            <li><NavLink to="/academic" className={navLinkClass}>Academic</NavLink></li>
            <li><NavLink to="/instructors" className={navLinkClass}>Instructor</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
            <li><NavLink to="/about" className={navLinkClass}>About MUPI</NavLink></li>
          </ul>

          {user ? (
            <NavLink to="/dashboard" className={navLinkClass}>Profile</NavLink>
          ) : (
            <div className="flex gap-3">
              <NavLink to="/login" className="bg-[#003646] text-white px-5 py-2 rounded-lg hover:bg-transparent border border-[#003646] duration-500 hover:text-black">Login</NavLink>
              <NavLink to="/student-register" className="bg-[#003646] text-white px-5 py-2 rounded-lg hover:bg-transparent border border-[#003646] duration-500 hover:text-black">Registration</NavLink>
            </div>
          )}





        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu with Smooth Slide */}
      <div
        className={`md:hidden bg-white w-full absolute top-full left-0 shadow-lg z-50 overflow-hidden transition-all duration-700 ease-in-out 
          ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <ul className="flex flex-col gap-4 p-4">
          <li><NavLink onClick={() => setIsOpen(false)} to="/" className={navLinkClass}>Home</NavLink></li>
          <li><NavLink onClick={() => setIsOpen(false)} to="/notice" className={navLinkClass}>Notice</NavLink></li>
          <li><NavLink onClick={() => setIsOpen(false)} to="/academic" className={navLinkClass}>Academic</NavLink></li>
          <li><NavLink onClick={() => setIsOpen(false)} to="/instructors" className={navLinkClass}>Instructor</NavLink></li>
          <li><NavLink onClick={() => setIsOpen(false)} to="/contact" className={navLinkClass}>Contact</NavLink></li>
          <li><NavLink onClick={() => setIsOpen(false)} to="/about" className={navLinkClass}>About MUPI</NavLink></li>
        </ul>

        {/* {user ? (
          <AvatarMenu handleLogout={handleLogout} />
        ) :
         ( */}
        <div className="flex flex-col gap-3 p-4">
          <NavLink onClick={() => setIsOpen(false)} to="/login" className="bg-[#003646] text-white px-5 py-2 rounded-lg hover:bg-transparent border border-primary duration-500 hover:text-black text-center">Sign In</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/register" className="bg-[#003646] text-white px-5 py-2 rounded-lg hover:bg-transparent border border-primary duration-500 hover:text-black text-center">Registration</NavLink>
        </div>
        {/* ) } */}


      </div>
    </section>
  );
};

export default Navbar;
