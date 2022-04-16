import React from "react";
import { FcTodoList } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className=" my-6 flex justify-center items-center">
        <FcTodoList
          onClick={() => navigate("/")}
          className="cursor-pointer sm:text-6xl text-5xl"
        />
        <p
          onClick={() => navigate("/")}
          className="cursor-pointer text-center sm:text-5xl text-4xl font-bold text-sky-400"
        >
          ToDo APP
        </p>
      </div>
    </>
  );
};

export default Header;
