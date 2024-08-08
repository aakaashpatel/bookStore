import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <h1 className="font-bold text-lg text-gray-500">Login</h1>
            <div className="mt-1">
              <div>
                <label htmlFor="" className=" ">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  {...register("email", { required: true })}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div>
                <label htmlFor="">Password</label>
                <br />
                <input
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>
              <div className="flex justify-around">
                <button className="bg-primary text-white btn">LOGIN</button>
                <div className="mt-3">
                  <span>Not registered?</span>
                  <Link to="/signup" className="text-blue-700">
                    Signup
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Login;
