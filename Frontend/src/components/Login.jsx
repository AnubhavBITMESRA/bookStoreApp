import React from 'react'
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form"

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);  // ✅ Logs input values

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="div">
            {/* Close Button */}
            <button 
              type="button" 
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => { 
                document.getElementById("my_modal_3").close(); 
                window.location.href = "/"; 
              }}
            >
              ✕
            </button>

            <h3 className="font-bold text-lg">Login</h3>

            <div className='mt-4 space-y-2'>
              <span>Email</span>
              <br/>
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
              {/* ✅ Show email error message */}
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br/>
              <input 
                type='password'
                placeholder='Enter your password'
                className='w-80 py-1 px-3 border rounded-md outline-none'
                {...register("password", { 
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters long" }
                })}
              />
              {/* ✅ Show password error message */}
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>

            {/* ✅ Move the Login button inside the form */}
            <div className='flex justify-around mt-4 '>
              <button 
                type="submit"  // ✅ Now submits form
                className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
              >
                Login
              </button>
              <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
