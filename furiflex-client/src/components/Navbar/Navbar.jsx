import "./navbar.css"
import { Link } from "react-router-dom";
import logo from "../../assets/F.png";
import account from "../../assets/Account.png";
import { useEffect, useState } from "react";
import { TbShoppingBag } from "react-icons/tb";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={` ${isSticky ? "is-sticky" : ""}`}>
      <div className="w-full py-3 border-b">
        <div className="flex justify-between px-4 items-center font-semibold">
          <div>
            <h1 className="font-bold flex text-4xl items-center">
              <img
                className="bg-primary p-4 rounded-full mr-2"
                src={logo}
                alt="FurniFlex"
              />{" "}
              Furni<span className="text-primary">Flex</span>
            </h1>
          </div>
          <div className="flex xl:gap-10 md:gap-8  gap-2">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/categories">Categories</Link>
            <Link to="/custom">Custom</Link>
            <Link to="/blog">Blog</Link>
          </div>
          <div className="space-x-4 flex items-center ">
            <span>
              {" "}
              <TbShoppingBag className="text-2xl" />{" "}
            </span>
            <span> <img src={account} alt="login user" /> </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
