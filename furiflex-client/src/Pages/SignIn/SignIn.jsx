import { useState } from "react";
import logo from "../../assets/F.png";
import { Link } from "react-router-dom";
import apple from "../../assets/apple.png";
import google from "../../assets/google.png";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import bgImg from "../../assets/user-enter.png";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <div>
      <div className="h-screen flex">
        <div className="flex w-full lg:w-1/2 justify-center items-center space-y-8">
          <div className="w-full px-8 md:px-32 lg:px-24 ">
            <form className="bg-gray-100 rounded-md p-5">
              <div className="">
                <h1 className="text-gray-800 font-semibold text-xl mb-1">
                  Welcome Back!
                </h1>
                <p className="text-sm font-normal text-gray-600 mb-8">
                  Enter your Credentials to access your account
                </p>
              </div>

              {/* input field here */}

              <div className="flex flex-col gap-6">
                {/* Email input */}
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    className="peer h-full w-full rounded-md border border-blue-gray-200 px-3 py-3 text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-1 focus:border-secondary  focus:border-t-transparent focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    type="email"
                    required
                    name="email"
                  />
                  <label className="before:content-[' '] after:content-[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-secondary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:!border-secondary peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Email
                  </label>
                </div>
                {/* Pass input */}
                <div className="relative h-11 w-full min-w-[200px]">
                  <input
                    type={showPass ? "text" : "password"}
                    className="peer h-full w-full rounded-md border border-blue-gray-200 px-3 py-3 text-sm font-normal text-blue-gray-700 outline-none transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-1 focus:border-secondary focus:border-t-transparent focus:outline-none disabled:border-0 disabled:bg-blue-gray-50"
                    placeholder=" "
                    required
                  />
                  <label className="before:content-[' '] after:content-[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-secondary peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:!border-secondary peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                    Password
                  </label>
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-3 top-3 cursor-pointer  "
                  >
                    {showPass ? (
                      <IoEyeOffOutline className="text-2xl" />
                    ) : (
                      <IoEyeOutline className="text-2xl" />
                    )}{" "}
                  </span>
                </div>
                <Link className="text-sm flex justify-end text-primary underline">
                  Forget Password
                </Link>
              </div>
              <div className="inline-flex items-center">
                <label
                  className="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3"
                  htmlFor="checkbox"
                >
                  <input
                    type="checkbox"
                    className="before:content-[''] peer relative h-5 w-5 cursor-pointer rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-secondary checked:bg-secondary checked:before:bg-secondary hover:before:opacity-10"
                    id="checkbox"
                  />
                  <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </label>
                <label
                  className="mt-px cursor-pointer select-none font-light text-gray-700"
                  htmlFor="checkbox"
                >
                  <p className="flex items-center text-sm mr-1 font-semibold antialiased">
                    I agree to the
                    <Link
                      className="font-semibold underline transition-colors hover:text-secondary"
                      to="/terms-policy"
                    >
                      Terms & Policy
                    </Link>
                  </p>
                </label>
              </div>
              <button
                type="submit"
                className="block w-full bg-secondary mt-5 py-2 rounded-lg hover:bg-gray-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Sign Up
              </button>
              <div className="flex items-center mt-2">
                <div className="border-t border-1 border-gray-400 flex-grow" />
                <div className="px-3 text-gray-800">OR</div>
                <div className="border-t border-1 border-gray-400 flex-grow" />
              </div>

              <div className="flex justify-between mt-4">
                <button className="text-sm ml-2 flex items-center hover:text-blue-500 border border-slate-500 p-2 hover:-translate-y-1 duration-500 transition-all">
                  <img className="mr-2" src={google} alt="" /> Sign in with
                  Google
                </button>
                <button className="text-sm ml-2 flex items-center hover:text-blue-500 border border-slate-500 p-2 hover:-translate-y-1 duration-500 transition-all">
                  <img className="mr-2" src={apple} alt="" /> Sign in with Apple
                </button>
              </div>
              <div className="flex items-center justify-center mt-4">
                {" "}
                <p>Dont have an account?</p>
                <Link
                  to="/sign-up"
                  className="text-primary ml-2 hover:underline"
                >
                  sign up
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(2,2,2,.1),rgba(0,0,0,.1)), url(${bgImg})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
          className="hidden lg:flex w-full lg:w-1/2 justify-around items-center"
        >
          <div className="w-full mx-auto px-14 flex items-center justify-center space-y-6 ">
            <div className="text-center w-4/5">
              <div className=" text-center flex items-center justify-center">
                <img
                  className="bg-primary p-4 rounded-full"
                  src={logo}
                  alt=""
                />
              </div>
              <h1 className="text-white font-bold text-4xl">
                Furni<span className="text-primary">Flex</span>
              </h1>
              <p className="text-white mt-1">
                Discover a seamless shopping experience with our curated
                collection of products. From fashion to electronics, we bring
                quality.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
