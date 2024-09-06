import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import logo from "../../assets/F.png";

const Footer = () => {
  return (
    <div className="bg-secondary">
      <div className="px-4 sm:px-6 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
        <div className="p-5">
          <h1 className="font-bold flex text-4xl items-center text-white">
            <img
              className="bg-primary p-4 rounded-full mr-2"
              src={logo}
              alt="FurniFlex"
            />{" "}
            Furni<span className="text-primary">Flex</span>
          </h1>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-white font-bold">About Us</div>
          <a className="my-3 block text-ternary" href="/#">
            Master Plan
          </a>
          <a className="my-3 block text-ternary" href="/#">
            Jobs
          </a>
          <a className="my-3 block text-ternary" href="/#">
            Invest
          </a>
          <a className="my-3 block text-ternary" href="/#">
            Pressroom
          </a>
          <a className="my-3 block text-ternary" href="/#">
            Blog
          </a>
          <a className="my-3 block text-ternary" href="/#">
            Contact
          </a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-white font-bold">
            Explore EEVE
          </div>
          <a className="my-3 block text-ternary" href="/#">
            Unlock my Robot Power
          </a>
          <a className="my-3 block text-ternary" href="/#">
            Starlight
          </a>
          <a className="my-3 block text-ternary" href="/#">
            Robot Platform
          </a>
          <a className="my-3 block text-ternary" href="/#">
            EEVE Roadmap
          </a>
        </div>
        <div className="p-5">
          <div className="text-sm uppercase text-white font-bold">
            Community & Support
          </div>
          <a className="my-3 block text-ternary" href="/#">
            Willow X Community
          </a>
          <a className="my-3 block text-ternary" href="/#">
            Developer & Maker Access
          </a>
          <a className="my-3 block text-ternary" href="/#">
            Special Cases
          </a>
        </div>
      </div>

      <div className="text-center pt-5 border-t  border-primary">
        <div className="flex pb-5 px-8 m-auto text-gray-800 text-sm justify-stretch items-center">
          <div className="md:flex-auto mt-2 flex justify-start">
            <a href="/#" className="mx-1">
              <FiFacebook className="text-white text-base" />{" "}
            </a>
            <a href="/#" className="mx-1">
              <IoLogoInstagram className="text-white text-base" />{" "}
            </a>
            <a href="/#" className="mx-1">
              <FaXTwitter className="text-white text-base" />{" "}
            </a>
            <a href="/#" className="mx-1">
              <SlSocialLinkedin className="text-white text-base" />{" "}
            </a>
          </div>
          <div className="md:flex-auto mt-2 flex justify-center">
            <a href="/#" className="mx-1">
              <FiFacebook className="text-white text-base" />{" "}
            </a>
            <a href="/#" className="mx-1">
              <IoLogoInstagram className="text-white text-base" />{" "}
            </a>
            <a href="/#" className="mx-1">
              <FaXTwitter className="text-white text-base" />{" "}
            </a>
            <a href="/#" className="mx-1">
              <SlSocialLinkedin className="text-white text-base" />{" "}
            </a>
          </div>
          <div className="md:flex-auto mt-2 flex justify-end">
            <a href="/#" className="mx-1">
              <FiFacebook className="text-white text-base" />{" "}
            </a>
            <a href="/#" className="mx-1">
              <IoLogoInstagram className="text-white text-base" />{" "}
            </a>
            <a href="/#" className="mx-1">
              <FaXTwitter className="text-white text-base" />{" "}
            </a>
            <a href="/#" className="mx-1">
              <SlSocialLinkedin className="text-white text-base" />{" "}
            </a>
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
