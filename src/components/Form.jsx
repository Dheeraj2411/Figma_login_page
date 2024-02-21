import { useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Form = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);
  const [isLogin, setisLogin] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };
  const toggleRepeatPasswordVisibility = () => {
    setIsRepeatPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="">
      <form>
        {isLogin && (
          <div className="">
            <label
              htmlFor="name"
              className=" relative  top-2.5  left-2  text-xs px-1 font-medium  bg-white text-gray-900
 "
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="yourname"
              required
            />
          </div>
        )}
        <div className="">
          <label
            htmlFor="email"
            className="relative  top-2.5  left-2  text-xs px-1  font-medium  bg-white text-gray-900 "
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
        <div className="mb-2 relative">
          <label
            htmlFor="password"
            className="relative rounded-lg top-2.5  left-2  text-xs px-0.5 font-medium  bg-white text-gray-900"
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
          <div className="mb-2 relative">
            <label
              htmlFor="repeat_password"
              className="mb-0 relative  top-2.5  left-2  text-xs  font-medium  bg-white px-1 text-gray-900 "
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
      <p className="text-sm text-center mt-4">
        {isLogin ? "Already have an account ? " : "Don't  have  an account ? "}
        <span
          onClick={() => setisLogin((prev) => !prev)}
          className="text-sky-400 cursor-pointer"
        >
          {isLogin ? "Login Here" : "Sign Up"}
        </span>
      </p>
    </div>
  );
};

export default Form;
