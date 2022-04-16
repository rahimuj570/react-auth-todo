import React from "react";
import { useNavigate } from "react-router-dom";

const ResetPass = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="my-2 shadow-bottom text-sky-600 border-b-2 rounded-full mt-10 border-x-2 p-2 font-bold w-5/6 sm:w-3/6 md:w-2/6 font-writer mx-auto text-center text-2xl">
        Reset Password
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className=" flex flex-col justify-center"
      >
        <input
          className="border my-1 p-1 w-5/6 sm:w-3/6 md:w-2/6 mx-auto"
          required
          placeholder="Your Email"
          type="email"
          name=""
          id=""
        />

        <input
          className="mt-1 bg-sky-400 text-white w-5/6 sm:w-3/6 md:w-2/6 mx-auto p-1 rounded font-bold cursor-pointer hover:bg-sky-500 duration-200"
          type="submit"
          value="Reset Password"
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
          Remember The Password?{" "}
          <span
            onClick={() => navigate("/login")}
            className="cursor-pointer font-semibold hover:text-sky-500   duration-200 text-sky-400"
          >
            Login Here
          </span>
        </p>
      </form>
    </>
  );
};

export default ResetPass;
