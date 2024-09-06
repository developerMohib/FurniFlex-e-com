import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <div className="px-7">
        <Navbar />
      </div>
      <div className="max-w-screen-xl mx-auto px-2">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
