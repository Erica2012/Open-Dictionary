import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="shadow-md sticky top-0 z-50 border-spacing-7 ">
      <div>
        <nav className="flex  justify-between py-4 max-w-7 mx-auto transparent h-14 ">
          {/* //navbar items */}
          <div className="flex px-10">
            <div className="flex md-8 items-center">
              <div>
                <Image
                  src="/images/removebg.png"
                  alt=""
                  width={75}
                  height={50}
                />
              </div>
              <Link href="/">
                <a className="flex text-violet-500 font-36">
                  <div>brainyDictionary </div>
                </a>
              </Link>
            </div>
          </div>
          {/* //navbar links */}
          <div className="flex gap-5 px-20 items-center ">
            <Link href="/signup">
              <button className="shadow-md w-20 h-12">sign up</button>
            </Link>
            <Link href="/signin">
              <button className="shadow-md w-20 h-12 ">sign in</button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
