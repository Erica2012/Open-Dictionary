import React from "react";
import Navbar from "../components/navbar";
import Image from "next/image"

const Landingpage = () => {
  return (
    <div className=" ">
      <Navbar />
      <div className="relative w-full h-screen bg-zinc-800/40">
        {/* <div className="h-[calc(100vh_-_88px)] bg-scroll bg-background_image bg-transparent bg-no-repeat bg-cover"> */}
        {/* <div className="bg-white"> */}

        <Image
          className="absolute w-full bg-white h-full object-cover mix-blend-overlay"
          // className="absolute w-full bg-white h-full object-cover "
          src="/images/bookbg.png"
          layout="fill"
        />

        <div className="grid grid-cols-3">
          <div className="flex flex-col justify-center rounded mt-10 px-3 col-span-1 ">
            <input
              type="text"
              placeholder="search here..."
              id="search"
              className="w-full h-10 rounded-2xl mx-10 items-center outline-none  "
            />
            <button className="shadow-md w-15 h-12 rounded-full justify-center hover: bg-purple-500">
              Get Started
            </button>
            {/* <div className=" flex mt-10">
              <Image src="/images/bookBg.png" alt="" height={400} width={500} />
            </div> */}
          </div>

          {/* <div className="flex justify-end mt-20"> */}
            {/* <Image src="/images/womanrm.png" alt="" height={400} width={500} /> */}
            {/* <Image src="/images/slide.png" alt="" height={400} width={500} /> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
