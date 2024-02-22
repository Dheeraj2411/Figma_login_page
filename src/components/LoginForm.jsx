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
      <div className="flex h-full w-full">
        <div className="w-1/2 hidden md:block h-screen">
          <img
            className="w-full h-full  "
            src="https://img.freepik.com/premium-photo/starry-night-lake_68067-800.jpg"
            alt="img-logo"
          />
        </div>
        <div className="md:w-1/2 relative flex flex-col  content-center  gap-5 mx-auto px-2 ">
          <div className="">
            <div className="w-2/3 md:justify-center md:items-center mx-auto pt-4">
              <img
                className="h-9 w-9 md:mx-auto"
                src="https://pinntag.com/wp-content/uploads/2023/08/Untitled-design-9.png"
                alt="logo"
              />
              <button
                className="content-center py-5 md:py-2"
                onClick={() => setCurrentSection(1)}
              >
                <IoMdArrowBack />
              </button>
            </div>
            <div className="flex"></div>
            <Header />
          </div>

          <div className="md:w-2/3 h-4/6 mx-auto ">{section}</div>

          <div className="sticky py-4 text-center my-auto flex md:flex-row flex-col justify-evenly  text-sm   ">
            <p className="text-sm">©️2024 Pinntag.All rights reserved</p>
            <div className="text-sky-400 ">
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
