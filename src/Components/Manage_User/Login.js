import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SocialSignin from "./SocialSignin";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="flex flex-col justify-center"
      >
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
          className="mt-1 bg-sky-400 text-white w-5/6 sm:w-3/6 md:w-2/6 mx-auto p-1 rounded font-bold hover:bg-sky-500 duration-200"
          type="submit"
          value="Log In"
        />
        <p className="mt-2 text-center">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="cursor-pointer font-semibold hover:text-sky-500   duration-200 text-sky-400"
          >
            Create An Account
          </span>
        </p>
        <p className="mt-2 text-center">
          Forget Password?{" "}
          <span
            onClick={() => navigate("/resetPass")}
            className="cursor-pointer font-semibold hover:text-sky-500   duration-200 text-sky-400"
          >
            Click Here
          </span>
        </p>
      </form>
      <SocialSignin />
    </>
  );
};

export default Login;
