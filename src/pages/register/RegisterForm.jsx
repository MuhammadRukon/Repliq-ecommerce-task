import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
  };
  return (
    <>
      <h2 className="text-center text-2xl mt-6">Register</h2>
      <form
        id="form"
        onSubmit={handleLogin}
        className="flex  flex-col gap-5 my-6"
      >
        <input
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email-address"
          className="border py-1 px-2 rounded-md border-[#e6e6e6]  focus:outline-[#e6e6e6]"
        ></input>
        <input
          className="border py-1 px-2 rounded-md border-[#e6e6e6]  focus:outline-[#e6e6e6]"
          type="text"
          id="password"
          name="password"
          required
          placeholder="password"
        ></input>
        <div className="flex justify-end items-center text-blue-600  px-1 text-xs -mt-3 ">
          <Link to={"/register"} className="cursor-pointer">
            Already have an account?
          </Link>
        </div>
        <button className="bg-[#48B7E9] mx-auto text-white py-1 px-6 rounded-md w-fit">
          Register
        </button>
      </form>
    </>
  );
};

export default RegisterForm;
