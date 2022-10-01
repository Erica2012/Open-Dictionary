import React from 'react'
import Image from 'next/image';
import {FcGoogle} from 'react-icons/fc'
import { BsFacebook } from "react-icons/bs";

const Signup = () => {
  return (
    <div className="relative w-full h-screen bg-zinc-800/90 ">
      <Image
        className="absolute w-full h-full object-cover mix-blend-overlay"
        src="/images/newbg1.jpg"
        layout="fill"
      />
      {/* <div className="flex justify-center items center h-full">
        <form className="max-w-[400px] w-full mx-auto bg-white p-8">
          <h2 className="text-4xl font-bold text-center p-4"> Sign Up</h2>
          <div className="flex justify-between py-8">
            <p>
              <div>
                <BsFacebook />
              </div>
              Facebook
            </p>
            <p>
              <div><FcGoogle /></div>
              Google
            </p>
            <div>
              <label>firstname</label>
              <input type="text" />
            </div>
            <div>
              <label>lastname</label>
              <input type="text" />
            </div>
            <div>
              <label>email</label>
              <input type="text" />
            </div>
            <div>
              <label>password</label>
              <input type="password" />
            </div>
            <div>
              <label>confirm password</label>
              <input type="password" />
            </div>
            <button>Sign Up</button>
            <p>
              {" "}
              <input type="checkbox" />
              Remember Me
            </p>
            <p>Sign up now</p>
          </div>
        </form>
      </div> */}
      <div className="grid grid-col-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 bg-white sm:max-w-[900px] ">
        <div className="hidden md:block bg-gray-400">
          <Image src="/images/loginNew.png" alt="" width={600} height={600} />
        </div>
        <div className="p-4 flex flex-col justify-center ">
          <form>
            <h2 className="text-4xl font-bold text-center mb-8">Register</h2>

            <div className="flex flex-col py-4">
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

            <button className="w-full p y-2 my-4 bg-violet-700 hover:via-violet-500 rounded-full">
              Register
            </button>
            <div className="flex flex-row justify-around">
              <p>
                <div>
                  <BsFacebook />
                </div>
                Facebook
              </p>
              <p>
                <div>
                  <FcGoogle />
                </div>
                Google
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;