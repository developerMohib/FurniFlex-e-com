import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import logo from "../../assets/F.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="px-4 sm:px-6 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div className="p-5">
          <Link to="/" className="font-bold flex text-4xl items-center text-white">
            <img
              className="bg-primary p-3 rounded-full mr-2"
              src={logo}
              alt="FurniFlex"
            />{" "}
            Furni<span className="text-primary">Flex</span>
          </Link>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-white font-bold">About Us</div>
          <Link to="/" className="my-3 block text-ternary">
            Master Plan
          </Link>
          <Link className="my-3 block text-ternary" to="/#">
            Jobs
          </Link>
          <Link className="my-3 block text-ternary" to="/#">
            Invest
          </Link>
          <Link className="my-3 block text-ternary" to="/#">
            Pressroom
          </Link>
          <Link className="my-3 block text-ternary" to="/#">
            Blog
          </Link>
          <Link className="my-3 block text-ternary" to="/#">
            Contact
          </Link>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-white font-bold">
            Explore EEVE
          </div>
          <Link className="my-3 block text-ternary" to="/#">
            Unlock my Robot Power
          </Link>
          <Link className="my-3 block text-ternary" to="/#">
            Starlight
          </Link>
          <Link className="my-3 block text-ternary" to="/#">
            Robot Platform
          </Link>
          <Link className="my-3 block text-ternary" to="/#">
            EEVE Roadmap
          </Link>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-white font-bold">
            Community & Support
          </div>
          <Link className="my-3 block text-ternary" to="/#">
            Willow X Community
          </Link>
          <Link className="my-3 block text-ternary" to="/#">
            Developer & Maker Access
          </Link>
          <Link className="my-3 block text-ternary" to="/#">
            Special Cases
          </Link>
        </div>
      </div>

      <div className="text-center pt-5 border-t  border-primary">
        <div className="flex pb-5 px-8 m-auto text-gray-800 text-sm justify-stretch items-center">
          <div className="md:flex-auto mt-2 flex justify-start">
            <Link to="/#" className="mx-1">
              <FiFacebook className="text-white text-base" />{" "}
            </Link>
            <Link to="/#" className="mx-1">
              <IoLogoInstagram className="text-white text-base" />{" "}
            </Link>
            <Link to="/#" className="mx-1">
              <FaXTwitter className="text-white text-base" />{" "}
            </Link>
            <Link to="/#" className="mx-1">
              <SlSocialLinkedin className="text-white text-base" />{" "}
            </Link>
          </div>
          <div className="md:flex-auto mt-2 flex justify-center">
            <Link to="/#" className="mx-1">
              <FiFacebook className="text-white text-base" />{" "}
            </Link>
            <Link to="/#" className="mx-1">
              <IoLogoInstagram className="text-white text-base" />{" "}
            </Link>
            <Link to="/#" className="mx-1">
              <FaXTwitter className="text-white text-base" />{" "}
            </Link>
            <Link to="/#" className="mx-1">
              <SlSocialLinkedin className="text-white text-base" />{" "}
            </Link>
          </div>
          <div className="md:flex-auto mt-2 flex justify-end">
            <Link to="/#" className="mx-1">
              <FiFacebook className="text-white text-base" />{" "}
            </Link>
            <Link to="/#" className="mx-1">
              <IoLogoInstagram className="text-white text-base" />{" "}
            </Link>
            <Link to="/#" className="mx-1">
              <FaXTwitter className="text-white text-base" />{" "}
            </Link>
            <Link to="/#" className="mx-1">
              <SlSocialLinkedin className="text-white text-base" />{" "}
            </Link>
          </div>
        </div>
        <div className="py-5 text-ternary">
          © Copyright 2020. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
