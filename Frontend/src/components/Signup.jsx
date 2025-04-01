import React from 'react';
import { Link } from "react-router-dom";
import Login from './Login';
import { useForm } from 'react-hook-form';
function Signup() {
   const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <>
      {/* Full-Screen White Background */}
      <div className='flex h-screen items-center justify-center bg-white'>
        {/* Signup Box */}
        <div className="bg-white shadow-lg border rounded-lg p-6 relative w-[600px]">
          {/* Close Button */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
          
          {/* Signup Title */}
          <h3 className="font-bold text-lg">Signup</h3>

          {/* Name Input */}
          <div className='mt-4 space-y-2'>
            <span>Name</span>
            <br />
            <input 
              type='text' 
              placeholder='Enter your fullname' 
              className='w-80 py-1 px-3 border rounded-md outline-none' 
              {...register("name", { 
                required: "Fullname is required", 
              })}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            
          </div>

          {/* Email Input */}
          <div className='mt-4 space-y-2'>
            <span>Email</span>
            <br />
            <input 
              type='text' 
              placeholder='Enter your email' 
              className='w-80 py-1 px-3 border rounded-md outline-none' 
              {...register("email", { 
                required: "Email is required", 
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email address"
                } 
              })}
            />
             {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* Password Input */}
          <div className='mt-4 space-y-2'>
            <span>Password</span>
            <br />
            <input 
              type='text' 
              placeholder='Enter your password' 
              className='w-80 py-1 px-3 border rounded-md outline-none' 
              {...register("password", { 
                required: "Password is required",
                minLength: { value: 6, message: "Password must be at least 6 characters long" }
              })}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* Signup Button & Login Link */}
          <div className='flex justify-around mt-4'>
            <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
              Signup
            </button>
            <p className='text-md'>
              Have an account? 
              <button 
                className='underline text-blue-500 cursor-pointer' 
                onClick={() => document.getElementById("my_modal_3")?.showModal()}
              >
                Login
              </button>
              <Login />
            </p>
          </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
