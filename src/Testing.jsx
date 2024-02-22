import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";

const Testing = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);
  const [isLogin, setisLogin] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const toggleRepeatPasswordVisibility = () => {
    setIsRepeatPasswordVisible((prevState) => !prevState);
  };

  // const [currentSection, setCurrentSection] = useState(1);
  //  let section;
  //  switch (currentSection) {
  //    case 1:
  //      section = <Form />;
  //      break;
  //    case 2:
  //      section = <PrivacyPolicy />;
  //      break;
  //    case 3:
  //      section = <TermCondition />;
  //      break;
  //    default:
  //      section = <Form />;
  //  }
  return (
    <section className="text-gray-600 body-font">
      <div className="  lg:mx-auto">
        <div className=" mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full md:h-auto h-64 hidden lg:block object-cover object-center rounded"
            src="https://img.freepik.com/premium-photo/starry-night-lake_68067-800.jpg"
          />
          <div className="container mx-auto lg:w-1/2  sm:w-full md:px-14  md:gap-6 lg:gap-0 bg-gray-100 rounded-lg p-8 flex flex-col  w-full  ">
            <h2 className="text-gray-900 text-lg md:text-center font-medium title-font mb-5">
              Sign Up
            </h2>
            <h1 className="text-gray-900 text-3xl text-balance font-semibold title-font mb-5">
              Register for a PinnaTag account for your business
            </h1>
            <p className="text-gray-900 text-sm font-medium title-font mb-5">
              Lets login into your Pinntag Buniess account first
            </p>
            <button
              className="content-center mb-2 md:py-2"
              onClick={() => setCurrentSection(1)}
            >
              <IoMdArrowBack />
            </button>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="relative md:6"
            >
              {isLogin && (
                <div className="mb-2.5 md:mb-5">
                  <label
                    htmlFor="name"
                    className=" absolute -top-2 left-1 text-xs px-0.5 font-medium  bg-white text-gray-900
 "
                  >
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="yourname"
                    required
                  />
                </div>
              )}
              <div
                className={`relative ${!isLogin ? "mt-7" : "md:mb-5 mb-2.5"} `}
              >
                <label
                  htmlFor="email"
                  className="absolute -top-2  left-2  text-xs px-0.5  font-medium  bg-white text-gray-900 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="john.doe@company.com"
                  required
                />
              </div>
              <div
                className={`relative ${!isLogin ? "my-8 " : "md:mb-5 mb-2.5"} `}
              >
                <label
                  htmlFor="password"
                  className="absolute -top-2 left-1 rounded-lg   text-xs px-0.5 font-medium  bg-white text-gray-900"
                >
                  Password
                </label>
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  id="password"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="*********"
                  required
                />
                <button
                  onClick={togglePasswordVisibility}
                  className="absolute  right-3 bottom-3 text-gray-600"
                >
                  {isPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              {isLogin && (
                <div className="mb-2.5 relative md:mb-5">
                  <label
                    htmlFor="repeat_password"
                    className="absolute -top-2 left-1 text-xs  font-medium bg-opacity-90 bg-white  px-0.5 text-gray-900 "
                  >
                    Repeat Password
                  </label>

                  <input
                    type={isRepeatPasswordVisible ? "text" : "password"}
                    id="repeat_password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    placeholder="*********"
                    required
                  />
                  <button
                    onClick={toggleRepeatPasswordVisibility}
                    className="absolute  right-3 bottom-3 text-gray-600"
                  >
                    {isRepeatPasswordVisible ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>
              )}
              <div>
                <button
                  type="submit"
                  className="text-white bg-sky-400 hover:bg-sky-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm w-full  px-5 py-2.5 text-center "
                >
                  Submit
                </button>
              </div>
            </form>
            <p className="text-sm text-center mt-4 pl-2">
              {isLogin
                ? "Already have an account ? "
                : "Don't  have  an account ? "}
              <span
                onClick={() => setisLogin((prev) => !prev)}
                className="text-sky-400 cursor-pointer"
              >
                {isLogin ? "Login Here" : "Sign Up"}
              </span>
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Literally you probably havent heard of them jean shorts.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Literally you probably havent heard of them jean shorts.
            </p>
            <p className="text-xs text-gray-500 mt-3">
              Literally you probably havent heard of them jean shorts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;
