import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialSignin from "./SocialSignin";
import { FaRegEye } from "react-icons/fa";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <h1 className="text-sky-600 my-2 shadow-bottom border-b-2 rounded-full mt-10 border-x-2 p-2 font-bold w-5/6 sm:w-3/6 md:w-2/6 font-writer mx-auto text-center text-2xl">
        SignUp Here
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col justify-center"
      >
        <input
          className="border my-1 p-1 w-5/6 sm:w-3/6 md:w-2/6 mx-auto"
          required
          placeholder="Your Name"
          type="text"
          name=""
          id=""
        />
        <input
          className="border my-1 p-1 w-5/6 sm:w-3/6 md:w-2/6 mx-auto"
          required
          placeholder="Your Email"
          type="email"
          name=""
          id=""
        />
        <div className="relative border my-1  w-5/6 sm:w-3/6 md:w-2/6 mx-auto ">
          <input
            className="p-1 w-full"
            required
            placeholder="Your Password"
            type={showPass ? "text" : "password"}
          />
          <FaRegEye
            onClick={() => setShowPass(!showPass)}
            title="Show Password"
            className="cursor-pointer absolute inset-y-2.5 right-2"
          />
        </div>

        <input
          className="border my-1 p-1 w-5/6 sm:w-3/6 md:w-2/6 mx-auto"
          required
          placeholder="Confirm Password"
          type={showPass ? "text" : "password"}
        />

        <input
          className="cursor-pointer mt-1 bg-sky-400 text-white w-5/6 sm:w-3/6 md:w-2/6 mx-auto p-1 rounded font-bold hover:bg-sky-500 duration-200"
          type="submit"
          value="Log In"
        />
        <p className="mt-2 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer font-semibold hover:text-sky-500   duration-200 text-sky-400"
          >
            Log In
          </span>
        </p>
      </form>
      <SocialSignin />
    </>
  );
};

export default Signup;
