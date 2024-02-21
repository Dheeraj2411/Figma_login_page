import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import PrivacyPolicy from "./PrivacyPolicy";
import Form from "./Form";
import Header from "./Header";
import TermCondition from "./TermCondition";

const LoginForm = () => {
  const [currentSection, setCurrentSection] = useState(1);
  let section;
  switch (currentSection) {
    case 1:
      section = <Form />;
      break;
    case 2:
      section = <PrivacyPolicy />;
      break;
    case 3:
      section = <TermCondition />;
      break;
    default:
      section = <Form />;
  }

  return (
    <>
      <div className="flex ">
        <div className="w-1/2 hidden md:inline-block  ">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/premium-photo/starry-night-lake_68067-618.jpg"
            alt="img-logo"
          />
        </div>

        <div className="md:w-1/2 flex flex-col justify-center content-center  mx-auto px-2">
          <div className="w-full mt-5 md:justify-center md:items-center">
            <img
              className="h-9 w-9 mx-auto"
              src="https://pinntag.com/wp-content/uploads/2023/08/Untitled-design-9.png"
              alt="logo"
            />
          </div>

          <div className="md:w-2/3 mx-auto py-5">
            <Header />

            <button className="py-2 " onClick={() => setCurrentSection(1)}>
              <IoMdArrowBack />
            </button>

            {section}
          </div>

          <div className=" bottom-0 top-0 text-center flex md:flex-row flex-col justify-evenly  text-sm py-8  mx-4">
            <p className="text-sm">©️2024 Pinntag.All rights reserved</p>
            <div className="text-sky-400 flex justify-center ">
              <button onClick={() => setCurrentSection(3)}>
                Term & Condition
              </button>
              <span className="text-black mx-2">|</span>
              <button onClick={() => setCurrentSection(2)}>
                Privacy & Policy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
