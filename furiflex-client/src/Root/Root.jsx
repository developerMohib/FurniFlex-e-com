import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="px-10">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Root;
