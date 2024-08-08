import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div id="" className="flex justify-center items-center h-screen">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h1 className="font-bold text-lg text-gray-500">Sign Up</h1>
            <div className="mt-1">
              <div>
                <label htmlFor="name" className="">
                  Name
                </label>
                <br />
                <input
                  id="name"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  {...register("name", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="email" className="">
                  Email
                </label>
                <br />
                <input
                  id="email"
                  type="text"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  {...register("email", { required: true })}
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  id="password"
                  type="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-2"
                  {...register("password", { required: true })}
                />
                {errors.password && <span>This field is required</span>}
              </div>
              <div className="flex justify-around">
                <button className="bg-primary text-white btn">LOGIN</button>
                <div className="mt-3">
                  <span>Already Account?</span>
                  <button
                    className="text-blue-700"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
