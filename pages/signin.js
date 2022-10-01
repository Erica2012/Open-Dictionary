import React from "react";
import Image from "next/image";

const Signin = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800/90 ">
      <Image
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src="/images/newbg1.jpg"
        layout="fill"
      />
      <div className="grid grid-col-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 bg-white sm:max-w-[900px] ">
        <div className="hidden md:block bg-gray-400">
          <Image src="/images/lognew.png" alt="" width={600} height={600} />
        </div>
        <div className="p-4 flex flex-col justify-center ">
          <form>
            <h2 className="text-4xl font-bold text-center mb-8">Login</h2>
            <div>
              <input
                className=" w-[120px] font-thin hover:shadow-inner rounded-full px-2"
                type="text"
                placeholder="firstname"
              />
            </div>
            <div>
              <input className=" p-2 " type="text" placeholder="lastname" />
            </div>
            <div>
              <input className=" p-2 " type="email" placeholder="email" />
            </div>
            <div>
              <input className=" p-2 " type="password" placeholder="password" />
            </div>
            <div>
              <input
                className=" p-2 "
                type="password"
                placeholder="confirm password"
              />
            </div>

            <button className="w-full p y-2 my-4 rounded-full bg-violet-700 hover:bg-violet-600">
              Login
            </button>
            <p className="text-center">Forgot Email or Password</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
