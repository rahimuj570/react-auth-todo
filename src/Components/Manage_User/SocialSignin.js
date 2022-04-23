import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import auth from "../../firebase.int";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "../Loading";

const SocialSignin = () => {
  const navigate = useNavigate();
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, GitUser, GitLoading, GitError] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, FacebookUser, FacebookLoading, FacebookError] =
    useSignInWithFacebook(auth);
  if (googleLoading || GitLoading || FacebookLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="my-8 mx-2 items-center flex justify-center">
        <div className="rounded h-1 sm:w-2/6 md:w-1/6 w-full bg-sky-200"></div>
        <p className="font-semibold mx-2">OR</p>
        <div className="rounded h-1 sm:w-2/6 md:w-1/6 w-full bg-sky-200"></div>
      </div>

      <div className="sm:w-2/6 w-5/6 mx-auto mb-10">
        <div
          onClick={async () => {
            await signInWithGoogle();
            navigate("/");
          }}
          className="mb-3 cursor-pointer duration-300  hover:bg-slate-50 rounded-md   py-2 text-xl flex items-center justify-center px-5 shadow"
        >
          <FcGoogle className="basis-10 text-3xl mx-1" />{" "}
          <p className="">Continue With Google</p>
        </div>
        <div
          onClick={async () => {
            await signInWithGithub();
            navigate("/");
          }}
          className="mb-3 cursor-pointer duration-300 hover:bg-slate-50 rounded-md   py-2 text-xl flex items-center justify-center px-5 shadow"
        >
          <FaGithub className="basis-10  text-3xl mx-1" />{" "}
          <p className="">Continue With Github</p>
        </div>
        <div
          onClick={() => signInWithFacebook()}
          className="mb-3 cursor-pointer duration-300 hover:bg-slate-50 rounded-md   py-2 text-xl flex items-center justify-center px-5 shadow"
        >
          <FaFacebook className="basis-10 text-sky-600 text-3xl mx-1" />{" "}
          <p className="">Continue With Facebook</p>
        </div>
      </div>
    </>
  );
};

export default SocialSignin;
