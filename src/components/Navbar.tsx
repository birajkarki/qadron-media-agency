import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";

const Navbar = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    if (openMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openMobileMenu]);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleMobileMenu = () => {
    setOpenMobileMenu(!openMobileMenu);
  };
  return (
    <nav
      className={`py-2 w-full ${
        isScrolling ? "fixed top-0 bg-white shadow-lg z-10" : "relative"
      }`}
    >
      <div className="w-[89%] m-auto max-w-[1400px] flex justify-between items-center ">
        <a href="/">
          <h1 className="text-3xl font-bold text-primary"> Qadron Media</h1>
        </a>
        <ul
          className={`md:flex items-center gap-8 md:static absolute text-gray-600 ${
            openMobileMenu
              ? "top-12 py-4 w-full bg-primary left-0 text-center space-y-10 text-white drop-shadow-lg z-20"
              : "hidden"
          }`}
        >
          <li>
            <a href="/" onClick={() => setOpenMobileMenu(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={() => setOpenMobileMenu(false)}>
              About
            </a>
          </li>
          <li>
            <a href="#pricing" onClick={() => setOpenMobileMenu(false)}>
              Pricing
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setOpenMobileMenu(false)}>
              Contact
            </a>
          </li>
        </ul>
        <div className="flex gap-3 text-white items-center ml-auto md:ml-0">
          <div
            className="bg-primary p-1 rounded-full hover:translate-y-[-2px]
           transition-all cursor-pointer"
          >
            <AiFillFacebook />
          </div>
          <div
            className="bg-primary p-1 rounded-full hover:translate-y-[-2px]
           transition-all cursor-pointer"
          >
            <AiOutlineTwitter />
          </div>
          <div
            className="bg-primary p-1 rounded-full hover:translate-y-[-2px]
           transition-all cursor-pointer"
          >
            <AiFillInstagram />
          </div>
        </div>

        <div className="md:hidden ml-4" onClick={handleMobileMenu}>
          {!openMobileMenu ? <FiMenu /> : <MdClose />}{" "}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
