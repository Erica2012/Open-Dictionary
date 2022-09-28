import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const SignIn = () => {
  return (
    // <div className="flex items-center justify-center h-[100vh] w-[100vw] font-light">
    <div className="bg-gradient-to-br  from-black via-emerald-300 to-yellow-400 h-[calc(100vh_-_88px)] bg-scroll ">
      {/* <Image src="/images/qwe.jpg"layout="fill" /> */}
      <div className="bg-white/20 backdrop-blur-md h-[550px] w-[400px]  md:w-[650px] lg:w-[800px] rounded-xl shadow-xl flex flex-row">
        <div className="text-black/80 md:basis-1/2">
          <div className="text-3xl pt-20 pb-12 text-center sm:text-left mx-32 font-semibold">
            Sign In
          </div>
          <table className="text-xl">
          
            <tr>
              <td className="px-6 py-3">Email :</td>
              <td>
                <input
                  className="bg-transparent placeholder-black/50 w-[120px] font-thin hover:shadow-inner rounded-full px-2"
                  placeholder="Email..."
                />
              </td>
            </tr>
            <tr>
              <td className="px-6 py-3">Password :</td>
              <td>
                <input
                  className="bg-transparent placeholder-black/50  w-[120px] font-thin hover:shadow-inner rounded-full px-2"
                  placeholder="Password..."
                />
              </td>
            </tr>
            
          </table>
          <button className="bg-white/5 backdrop-blur-sm w-[130px] h-[40px] rounded-full shadow-lg hover:bg-white/20 mx-32 text-xl">
            Sign In
          </button>
        </div>
        <div className=" w-full h-full hidden md:flex">
          <Image
            src="/images/login1.png"
            className="w-16 h-16"
            width={1200}
            height={120}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
