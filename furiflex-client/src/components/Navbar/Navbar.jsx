import "./navbar.css";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/F.png";
import account from "../../assets/Account.png";
import { useEffect, useState } from "react";
import { TbShoppingBag } from "react-icons/tb";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (e) => {
    if (!e.target.closest("#sidebar") && !e.target.closest("#open-sidebar")) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("click", closeSidebar);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("click", closeSidebar);
    };
  }, []);

  const navLinks = (
    <ul className="md:flex xl:gap-10 md:gap-5 gap-2">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active text-primary" : "hover:text-primary font-light"
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active text-primary" : "hover:text-primary font-light"
          }
          to="/products"
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active text-primary" : "hover:text-primary font-light"
          }
          to="/categories"
        >
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active text-primary" : "hover:text-primary font-light"
          }
          to="/custom"
        >
          Custom
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active text-primary" : "hover:text-primary font-light"
          }
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className={` ${isSticky ? "is-sticky" : ""}`}>
      <div className="w-full py-3 border-b">
        <div className="flex justify-between md:px-10 px-4 items-center font-semibold">
          <div>
            <Link to="/" className="font-bold flex text-3xl items-center">
              <img
                className="bg-primary p-2 rounded-full mr-2"
                src={logo}
                alt="FurniFlex"
              />{" "}
              Furni<span className="text-primary">Flex</span>
            </Link>
          </div>

          <div className="hidden md:block">{navLinks}</div>
          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4"></div>

          <div className="space-x-4 flex items-center ">
            <button
              className="text-gray-500 hover:text-gray-600 md:hidden"
              id="open-sidebar"
              onClick={toggleSidebar}
            >
              {isSidebarOpen ? (
                <RxCross2 className="text-2xl" />
              ) : (
                <AiOutlineBars className="text-2xl" />
              )}
            </button>
            <Link to="/cart">
              {" "}
              <TbShoppingBag className="text-2xl" />{" "}
            </Link>
            <span>
              {" "}
              <img src={account} alt="login user" />{" "}
            </span>
          </div>
        </div>

        {/* Sidebar Drawer for Mobile */}
        <div
          id="sidebar"
          className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 z-50 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Menu</h1>
            <nav>{navLinks}</nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
