import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../firebase.int";
import Loading from "../Loading";
import SocialSignin from "./SocialSignin";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [customError, setCustomError] = useState({});
  console.log(user);
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <h1 className="my-2 shadow-bottom border-b-2 rounded-full mt-10 border-x-2 p-2 font-bold w-5/6 sm:w-3/6 md:w-2/6 font-writer mx-auto text-sky-600 text-center text-2xl">
        Log In Here
      </h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const userInfo = {
            password: e.target.password.value,
            email: e.target.email.value,
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
          await signInWithEmailAndPassword(userInfo.email, userInfo.password);
          if (error) {
            if (error?.code === "auth/invalid-email") {
              toast.error("Your Email Address is not Found");
              return;
            } else if (error?.code === "auth/invalid-password") {
              toast.error("Your Password My be Wrong");
            } else {
              toast.error(
                "Something Went Wrong!  Please Check The Email and Password."
              );
            }
          } else {
            navigate("/");
          }
        }}
        className="flex flex-col justify-center"
      >
        {loading && <Loading />}
        <div className="relative border my-1  w-5/6 sm:w-3/6 md:w-2/6 mx-auto ">
          <input
            className=" p-1 w-full"
            required
            placeholder="Your Email"
            type="email"
            name="email"
            id=""
          />
          <p className=" px-1 bg-slate-50 text-red-400 text-center">
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
        <input
          className="mt-1 bg-sky-400 text-white w-5/6 sm:w-3/6 md:w-2/6 mx-auto p-1 rounded font-bold hover:bg-sky-500 duration-200 cursor-pointer"
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
