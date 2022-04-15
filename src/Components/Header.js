import React from "react";
import { FcTodoList } from "react-icons/fc";
const Header = () => {
  return (
    <>
      <div className="my-6 flex justify-center items-center">
        <FcTodoList className="sm:text-6xl text-5xl" />
        <p className="text-center sm:text-5xl text-4xl font-bold text-sky-400">
          ToDo APP
        </p>
      </div>
    </>
  );
};

export default Header;
