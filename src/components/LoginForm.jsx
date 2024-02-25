import { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import PrivacyPolicy from "./PrivacyPolicy";
import Form from "./Form";
import Header from "./Header";
import TermCondition from "./TermCondition";
import Logosign from "../assets/images/LogoPage.png";
import Logo from "../assets/images/Logo.png";

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
      <div className="md:h-[1024px] h-[848px]     flex ">
        <div className="hidden w-5/12  md:inline-block  ">
          <div className="  md:flex md:justify-center h-full items-center flex-col bg-black-rgba ">
            <img className="h-40 w-40 object-contain" src={Logosign} />
            <h1 className="text-center text-white text-3xl font-extrabold px-2">
              PINNTAG
            </h1>
          </div>
        </div>

        <div className="md:w-[730px]  h-full relative gap-6 md:gap-0 flex flex-col justify-evenly content-center  px-6 py-8 mx-auto  md:px-32">
          <div className="md:w-[480px]  object-cover ">
            <img
              className="bg-logo-bg w-8  h-9 md:ml-8 rounded-md  p-1 md:mx-auto justify-center   "
              src={Logo}
              alt="logo"
            />
          </div>

          <div className="md:w-[480px] w-[327px] h-[688px] mx-auto justify-center text-center md:text-left flex flex-col gap-7">
            <button className="ml-8" onClick={() => setCurrentSection(1)}>
              <IoMdArrowBack />
            </button>
            <Header />
            {section}
          </div>

          <div className="flex flex-col md:flex-row  bottom-0  justify-center items-center text-center md:justify-between text-sm gap-2  ">
            <p className="font-normal text-secondary-header">
              ©️2024 Pinntag. All rights reserved
            </p>
            <div className="text-btncolor font-bold relative ">
              <button onClick={() => setCurrentSection(3)}>
                Term & Condition
              </button>
              <span className="text-secondary-header md:mx-2  mx-5">|</span>
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
