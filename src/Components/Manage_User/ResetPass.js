import React, { useState } from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.int";

const ResetPass = () => {
  const [spin, setSpin] = useState(false);
  const navigate = useNavigate();
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  if (error) {
    toast.error("User Not Found");
  }
  if (!error && !sending) {
    toast.success("Check Your Email");
  }

  return (
    <>
      <ToastContainer />
      <h1 className="my-2 shadow-bottom text-sky-600 border-b-2 rounded-full mt-10 border-x-2 p-2 font-bold w-5/6 sm:w-3/6 md:w-2/6 font-writer mx-auto text-center text-2xl">
        Reset Password
      </h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          setSpin(true);
          await sendPasswordResetEmail(e.target.email.value);
          setSpin(false);
        }}
        className="mb-10 flex flex-col justify-center"
      >
        <div className="relative w-5/6 sm:w-3/6 md:w-2/6 mx-auto">
          <input
            className="w-full border my-1 p-1 "
            required
            placeholder="Your Email"
            type="email"
            name="email"
            id=""
          />
          <svg
            role="status"
            className={`${
              spin ? "block" : "hidden"
            }  inset-y-1.5 right-0 absolute mr-2 w-7 h-7 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600`}
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>

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
