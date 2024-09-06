import { Link } from "react-router-dom";
import logo from "../../assets/F.png"
const Navbar = () => {
  return (
    <div>
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
            <Link to="/" >Home</Link>
            <Link to="/products" >Products</Link>
            <Link to="/categories" >Categories</Link>
            <Link to="/custom" >Custom</Link>
            <Link to="/blog" >Blog</Link>
          </div>
          <div>
            <button className="py-2 px-6 bg-black text-white rounded-3xl font-semibold">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
