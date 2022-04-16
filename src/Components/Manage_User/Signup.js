import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SocialSignin from "./SocialSignin";
import { FaRegEye } from "react-icons/fa";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.int";
import { async } from "@firebase/util";
import Loading from "../Loading";

const Signup = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const [customError, setCustomError] = useState({});
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating, error1] = useUpdateProfile(auth);

  return (
    <>
      <h1 className="text-sky-600 my-2 shadow-bottom border-b-2 rounded-full mt-10 border-x-2 p-2 font-bold w-5/6 sm:w-3/6 md:w-2/6 font-writer mx-auto text-center text-2xl">
        SignUp Here
      </h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const userInfo = {
            password: e.target.password.value,
            name: e.target.name.value,
            email: e.target.email.value,
            confirmPassword: e.target.confirmPassword.value,
          };
          if (
            !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
              userInfo.email
            )
          ) {
            setCustomError({
              ...customError,
              email: "* Input a valid Email",
            });
            return;
          } else {
            setCustomError({ email: false });
          }
          if (
            !/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(
              userInfo.password
            )
          ) {
            setCustomError({
              password:
                "* Password must be contain minimum 6 character with numeric and special symbol",
            });
            return;
          } else {
            setCustomError({ ...customError, password: "false" });
          }
          if (userInfo.confirmPassword !== userInfo.password) {
            setCustomError({
              ...customError,
              confirmPassword: "* The password is not same.",
            });
            return;
          } else {
            setCustomError({ confirmPassword: "false" });
          }
          await createUserWithEmailAndPassword(
            userInfo.email,
            userInfo.password
          );
          await updateProfile({ displayName: userInfo.name });
          navigate("/");
        }}
        className="flex flex-col justify-center"
      >
        {loading && <Loading />}
        <input
          className="border my-1 p-1 w-5/6 sm:w-3/6 md:w-2/6 mx-auto"
          required
          placeholder="Your Name"
          type="text"
          name="name"
          id=""
        />
        <div className="relative border my-1  w-5/6 sm:w-3/6 md:w-2/6 mx-auto ">
          <input
            className=" p-1 w-full"
            required
            placeholder="Your Email"
            type="email"
            name="email"
            id=""
          />
          <p className="px-1 bg-slate-50 text-red-400 text-center">
            {customError.email && customError.email}
          </p>
        </div>
        <div className="relative border my-1  w-5/6 sm:w-3/6 md:w-2/6 mx-auto ">
          <input
            className="p-1 w-full"
            required
            placeholder="Your Password"
            type={showPass ? "text" : "password"}
            name="password"
          />
          <FaRegEye
            onClick={() => setShowPass(!showPass)}
            title="Show Password"
            className="cursor-pointer absolute inset-y-2.5 right-2"
          />
          <p className="px-1 bg-slate-50 text-red-400 text-center">
            {customError.password !== "false" ? customError.password : ""}
          </p>
        </div>

        <div className="relative border my-1  w-5/6 sm:w-3/6 md:w-2/6 mx-auto ">
          <input
            className=" p-1 w-full"
            required
            placeholder="Confirm Password"
            type="password"
            name="confirmPassword"
          />
          <p className="px-1 bg-slate-50 text-red-400 text-center">
            {customError.confirmPassword !== "false"
              ? customError.confirmPassword
              : ""}
          </p>
        </div>
        <input
          // onClick={async () => {
          //   await updateProfile({ displayName: userInfo.name });
          //   alert("Updated profile");
          // }}
          className="cursor-pointer mt-1 bg-sky-400 text-white w-5/6 sm:w-3/6 md:w-2/6 mx-auto p-1 rounded font-bold hover:bg-sky-500 duration-200"
          type="submit"
          value="Sign Up"
        />
        <p className="  mt-2 text-center">
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
