import React from "react";
import Navbar from "./components/navbar";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-br  from-black via-emerald-300 to-yellow-400 h-[calc(100vh_-_88px)] bg-scroll ">
        <div className="grid grid-cols-2">
          <div className="flex flex-col justify-center rounded mt-10 px-3 col-span-1 ">
            <div className="text-white text-center space-y-3">
              <h1 className="font-medium text-3xl  ">Brainy Dictionary</h1>
              <p className="font-light">
                Do you want to build your vocabulary? <br /> This dictionary is
                a world class dictionary <br /> which will help you achieve that
                goal
                <br /> Click on the button below to get started...
              </p>
              <button className="shadow-md rounded-md justify-center px-2 bg-yellow-300 w-20 h-12 text-teal-500 hover:bg-white">
                Get Started
              </button>
            </div>
          </div>

          <div className=" flex mt-10 justify-end">
            <Image src="/images/slide.png" alt="" height={400} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
