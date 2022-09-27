import React from "react";
import SearchBar from "./searchbar";
import { IoVolumeHigh } from "react-icons/io";

const Form = () => {
  return (
    <div>
      <form action="">
        <div>
          <div className="voices-icons">
            <div className="select-voices">
              <select name="" id="">
                <option value="">English</option>
                <option value="">English</option>
                <option value="">English</option>
              </select>
            </div>
            <div>
              <IoVolumeHigh />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
