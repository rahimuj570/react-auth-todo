import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <p className="mt-10 mb-2 bg-slate-50 p-2 text-center">
        ToDo APP &copy; {year} by{" "}
        <span className="font-semibold italic">Rahimuj570</span>
      </p>
    </>
  );
};

export default Footer;
