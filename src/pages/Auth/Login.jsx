import React from "react";
import { useForm } from "react-hook-form";
import { BiLogInCircle } from "react-icons/bi";

const Login = () => {
  const { register, handleSubmit } = useForm();

  const loginHandle = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-semibold font-inter">Oturum Aç</h1>
      <form
        className="p-3 border rounded-xl shadow-xl flex gap-x-2"
        onSubmit={handleSubmit(loginHandle)}
      >
        <input
          placeholder="Kullanıcı Adı"
          className="px-4 py-2 rounded-md border bg-transparent outline-none font-inter"
          {...register("username")}
        />
        <input
          type="password"
          placeholder="Parola"
          className="px-4 py-2 rounded-md border bg-transparent outline-none font-inter"
          {...register("password")}
        />
        <button
          className="px-4 py-2 rounded-md bg-[#202020] text-white font-medium text-sm font-inter flex items-center gap-x-2"
          type="submit"
        >
          <BiLogInCircle />
          Giriş Yap
        </button>
      </form>
    </div>
  );
};

export default Login;
