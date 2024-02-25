import { useState } from "react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Form = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);
  const [isLogin, setisLogin] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const toggleRepeatPasswordVisibility = () => {
    setIsRepeatPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="mx-auto">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="md:mt-12 mt-8 flex flex-col h-80 justify-evenly gap-[1rem] "
      >
        {isLogin && (
          <div className="relative w-[20.5rem] md:w-[26rem]">
            <label
              htmlFor="name"
              className=" absolute -top-2 left-3 text-xs px-2 font-medium  bg-white text-label-text-color
 "
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="bg-white border border-input-border placeholder-header-font text-gray-900 text-base font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block h-14 w-full py-7 px-5"
              placeholder="yourname"
              required
            />
          </div>
        )}
        <div className="relative w-[20.5rem] md:w-[26rem] ">
          <label
            htmlFor="email"
            className="absolute -top-2  left-2  text-xs px-2  font-medium  bg-white text-label-text-color "
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="bg-white border border-gray-300 placeholder-header-font text-base font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full h-14 py-7 px-5"
            placeholder="youname@gmail.com"
            required
          />
        </div>
        <div className="w-[20.5rem] md:w-[26rem] relative ">
          <label
            htmlFor="password"
            className="absolute -top-2 left-2 rounded-lg   text-xs px-2 font-medium  bg-white text-label-text-color"
          >
            Password
          </label>
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            className="bg-white border border-gray-300 text-gray-900 placeholder-header-font text-base font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-7 px-5 h-14"
            placeholder="*********"
            required
          />
          <button
            onClick={togglePasswordVisibility}
            className="absolute  right-3 text-2xl  bottom-5 text-gray-600"
          >
            {isPasswordVisible ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        {isLogin && (
          <div className="w-[20.5rem] md:w-[26rem] relative">
            <label
              htmlFor="repeat_password"
              className="absolute -top-2 left-2 text-xs  font-medium bg-opacity-90 px-2 bg-white text-label-text-color"
            >
              Repeat Password
            </label>

            <input
              type={isRepeatPasswordVisible ? "text" : "password"}
              id="repeat_password"
              className="bg-white border border-gray-300 placeholder-header-font text-gray-900 text-base font-semibold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-7 px-5 h-14"
              placeholder="*********"
              required
            />
            <button
              onClick={toggleRepeatPasswordVisibility}
              className="absolute  text-2xl right-3 bottom-5 text-gray-600"
            >
              {isRepeatPasswordVisible ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </button>
          </div>
        )}
        <div className="w-[20.5rem] md:w-[26rem]">
          <button
            type="submit"
            className="text-white bg-btncolor hover:bg-btncolor focus:ring-4 focus:outline-none focus:ring-blue-300  rounded-3xl text-lg w-full font-bold px-5 py-2.5 text-center h-12 "
          >
            Save
          </button>
        </div>
        <p className="text-sm text-center md:mt-4 mt-0 font-normal text-secondary-header">
          {isLogin
            ? "Already have an account ? "
            : "Don't  have  an account ? "}
          <span
            onClick={() => setisLogin((prev) => !prev)}
            className="text-btncolor cursor-pointer font-medium text-base"
          >
            {isLogin ? "Login Here" : "Sign Up"}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Form;
