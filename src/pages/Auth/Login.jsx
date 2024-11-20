import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BiLogInCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginService } from "~/redux/slices/userSlice";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { status } = useSelector((state) => state.user);

  const loginHandle = (data) => {
    dispatch(loginService(data));
  };

  useEffect(() => {
    if (status === "success") {
      toast.success("Başarıyla giriş yaptınız.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    if (status === "failed") {
      toast.error("Kullanıcı adı veya parola hatalı.");
    }
  }, [status]);

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
