import React from "react";
import about from "../../assets/about_us.jpg";
import pic1 from "../../assets/lgbtq1.jpg";
import pic2 from "../../assets/lgbtq2.jpg";
import pic3 from "../../assets/lgbtq3.jpg";
import pic4 from "../../assets/lgbtq4.jpg";
const About = () => {
  return (
    <div className="py-16 px-8 ">
      <div className="md:flex">
        <div className="w-full md:w-1/2">
          <h1 className="text-red-700 text-4xl font-bold">About Us</h1>
          <p className="py-8 text-justify">
            Viracore casa is a unique network of indigenous and native people
            around the world. We believe that everyone has a root and we want
            you to know more about them. Also known as ethnic groups, nations,
            and the members of these groups are culturally distinct ethnic
            groups who are directly descended from the earliest known
            inhabitants of a particular geographic region, and who to some
            extent maintain the language and culture of those original peoples.
            Connect with people of your origin and explore the peculiarity of
            each groups.
          </p>
          <p>
            Viracore Casa provides more than information of the groups, but also
            allow you to connect with them.
          </p>
        </div>
        <div className="w-full md:w-1/2">
          <img className="mx-auto" src={about} alt="" />
        </div>
      </div>

      <div className="text-center text-white my-16 px-5 md:px-10 py-10 bg-gradient-to-r from-[#FF5200] from-20% via-[#0FBA00] via-40% to-[#660191] to-80%">
        <h1 className="text-xl">CONNECTING FOR FUN</h1>
        <p className="text-xl mt-5">
          We believe connnecting should be fun ! with discussion cummunities and
          pride events , you can find your people without tiring out your thumbs
          .
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-8 my-10">
        <div>
          <img className="h-[230px]" src={pic1} alt="" />
        </div>
        <div>
          <img className="h-[230px]" src={pic2} alt="" />
        </div>
        <div>
          <img className="h-[230px]" src={pic3} alt="" />
        </div>
        <div>
          <img className="h-[230px]" src={pic4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
