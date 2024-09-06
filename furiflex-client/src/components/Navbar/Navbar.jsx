import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/F.png";
import account from "../../assets/Account.png";
import { useEffect, useState } from "react";
import { TbShoppingBag } from "react-icons/tb";

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
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
      <li>
        <Link to="/custom">Custom</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
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
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <span>
              {" "}
              <TbShoppingBag className="text-2xl" />{" "}
            </span>
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
