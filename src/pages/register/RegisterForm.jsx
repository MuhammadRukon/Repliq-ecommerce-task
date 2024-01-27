import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const RegisterForm = () => {
  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibnVtYmVyIjoiMDE4MTU3ODAwNTMiLCJwYXNzd29yZCI6ImhpcmVNZVBsZWFzZSIsIm5hbWUiOiJSb25hbGRvIiwiY29tcGFueSI6IlJlcGxpcSJ9.ANUYAQ_I5H3L0v49ULDZrZ3oEFE5CHB9X7RQu79dmK8';
  const navigate = useNavigate();
  const {register}= useContext(AuthContext)

  const handleRegister = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    const password = e.target.password.value;
    const res = register(number, password, token);
    if(res){
      navigate('/')
    }
  };
  return (
    <>
      <h2 className="text-center text-2xl mt-6">Register</h2>
      <form
        id="form"
        onSubmit={handleRegister}
        className="flex  flex-col gap-5 my-6"
      >
        <input
          type="number"
          name="number"
          id="number"
          required
          placeholder="Phone number"
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
          <Link to={"/login"} className="cursor-pointer">
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
