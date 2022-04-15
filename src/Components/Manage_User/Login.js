import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex flex-col justify-center"
    >
      <input
        className="border my-1 p-1 w-5/6 sm:w-4/6 mx-auto"
        required
        placeholder="Your Email"
        type="email"
        name=""
        id=""
      />
      <div className="relative border my-1  w-5/6 sm:w-4/6 mx-auto ">
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
        className="bg-sky-400 text-white w-5/6 sm:w-4/6 mx-auto p-1 rounded font-bold hover:bg-sky-500 duration-200"
        type="submit"
        value="Log In"
      />
    </form>
  );
};

export default Login;
