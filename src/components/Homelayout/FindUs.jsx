import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-bold">Find us</h1>
      <div>
        <div className="flex flex-col justify-start items-start gap-3  ">
          <button className="btn w-full flex justify-start"><FaFacebook></FaFacebook> Facebook</button>
          <button className="btn w-full flex justify-start"><FaXTwitter></FaXTwitter> Twitter</button>
          <button className="btn w-full flex justify-start"><FaInstagram></FaInstagram> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
