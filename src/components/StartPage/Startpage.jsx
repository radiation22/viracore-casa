import React from "react";
import Login from "../Login/Login";
import HomeFooter from "../Footer/HomeFooter";
import pic1 from "../../assets/register.jpg";
import About from "../About/About";
import Points from "../Points/Points";
import Touch from "../Touch/Touch";

const StartPage = () => {
  return (
    <div>
      <div className="flex bg-[#2F0B0C] flex-col-reverse md:flex lg:flex-row items-center py-5 px-2 w-full">
        {/* Content section */}
        <div className="w-[100%] p-2 lg:p-8 lg:w-[50%]">
          <h1 className="text-white text-4xl font-bold">
            Connect with friends!
          </h1>
          <h1 className="text-white text-xl mt-4 font-bold">
            Share what's new and life moments with your friends.
          </h1>

          {/* <p className="text-white text-justify mt-2 lg:mt-5">
            There Are 370 Million Indigenous People Around The World And Spread
            Across More Than 90 Countries. They Belong To More Than 5,000
            Different Indigenous Peoples And Speak More Than 4,000 Languages.
            Indigenous People Represent About 5% Of The World’s Population. The
            Vast Majority Of Them – 70% – Live In Asia.
          </p> */}
          <img
            className="rounded-xl  border-2 mt-3 mx-auto"
            src={pic1}
            alt=""
          />
        </div>

        {/* Login section */}
        <div className="w-[100%] lg:w-[50%] p-2 lg:p-10">
          <Login></Login>
        </div>
      </div>

      <div className="px-3 lg:px-8 bg-white">
        <About></About>

        <Points></Points>
      </div>

      <Touch></Touch>

      <HomeFooter></HomeFooter>
    </div>
  );
};

export default StartPage;
