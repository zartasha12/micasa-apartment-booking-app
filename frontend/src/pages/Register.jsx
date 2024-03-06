import React from "react";
import { useMutation, useQueryClient } from "react-query";
import { useForm } from "react-hook-form";
import * as apiClient from "../api-client";
import { useAppContext } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const queryClient = useQueryClient();
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const mutation = useMutation(apiClient.register, {
    onSuccess: async () => {
      showToast({ message: "registration success", type: "success" });
      await queryClient.invalidateQueries("validateToken");
      navigate("/");
    },
    onError: (error) => {
      showToast({ message: error.message, type: "ERROR" });
    },
  });

  const onSubmit = handleSubmit((data) => {
    mutation.mutate(data);
  });
  return (
    <>
      {/* <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
        <div className="max-w-md w-full bg-white p-8 border border-gray-300 rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Log in to your design account
          </h2>
          <div className="space-y-4">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#1877F2] text-white">
              Continue with Facebook
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#DB4437] text-white">
              Continue with Google
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#000000] text-white">
              Continue with Apple
            </button>
          </div>
          <div className="my-6 flex items-center justify-between">
            <hr className="w-full" />
            <p className="text-center px-3 text-sm text-gray-500">OR</p>
            <hr className="w-full" />
          </div>
          <form className="space-y-6">
            <div>
              <input
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Email address"
                type="email"
              />
            </div>
            <div>
              <input
                className="flex h-10 w-full rounded-md border  bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your password"
                type="password"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <input
                  aria-hidden="true"
                  tabIndex="-1"
                  type="checkbox"
                  value="on"
                />
                <label
                  htmlFor="keep-signed-in"
                  className="text-sm font-medium leading-none"
                >
                  Keep me signed in until I sign out
                </label>
              </div>
              <a className="text-sm text-blue-500" href="#">
                Forgot your password
              </a>
            </div>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
              Log in
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm">Don’t have an account?</p>
            <a className="text-sm text-blue-500" href="#">
              Sign up
            </a>
          </div>
        </div>
      </div> */}

      <div className="flex-1 flex items-center justify-center bg-white p-8">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-bold text-[#6d28d9] mb-6">Sign Up</h2>
          <p className="text-sm text-gray-600 mb-8">
            Create a account to access latest jobs, networking, events &amp;
            training
          </p>
          <form className="space-y-6" onSubmit={onSubmit}>
            <div className="flex flex-col md:flex-row gap-4">
              <label className="flex-1 ">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...register("firstName", {
                    required: "This field is required",
                  })}
                  placeholder="First Name"
                  type="text"
                />
                {errors.firstName && (
                  <span className="text-red-500">
                    {errors.firstName.message}
                  </span>
                )}
              </label>
              <label className="flex-1">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...register("lastName", {
                    required: "This field is required",
                  })}
                  placeholder="Last Name"
                  type="text"
                />
                {errors.lastName && (
                  <span className="text-red-500">
                    {errors.lastName.message}
                  </span>
                )}
              </label>
            </div>
            <input
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              {...register("email", {
                required: "Email is required",
              })}
              placeholder="Email Id"
              type="email"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}

            <div className="flex flex-col md:flex-row gap-4">
              <label className="flex-1">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                  })}
                  placeholder="Password"
                  type="password"
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <label className="flex-1">
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  {...register("confirmPassword", {
                    validate: (val) => {
                      if (!val) {
                        return "This field is required";
                      } else if (watch("password") !== val) {
                        return "Your password does not match";
                      }
                    },
                  })}
                  placeholder="Confirm Password"
                  type="password"
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </label>
            </div>
            <div className="flex items-center">
              <input
                aria-hidden="true"
                tabIndex={-1}
                type="checkbox"
                defaultValue="on"
              />

              <label htmlFor="terms" className="text-sm ml-2">
                I've read and agree with{" "}
                <a href="#" className="text-[#6d28d9]">
                  Terms of Service
                </a>{" "}
                and our{" "}
                <a href="#" className="text-[#6d28d9]">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 w-full bg-[#6d28d9] text-white"
            >
              SIGN UP
            </button>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link to="/sign-in" className="text-[#6d28d9]">
                Sign In
              </Link>
            </div>
            {/* <div className="flex items-center justify-between mt-6">
                <span className="bg-gray-300 h-px flex-1" />
                <span className="px-4 text-gray-500 text-sm">Or</span>
                <span className="bg-gray-300 h-px flex-1" />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <button className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 flex items-center justify-center bg-white border border-gray-300 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 mr-2"
                  >
                    <circle cx={12} cy={12} r={10} />
                    <circle cx={12} cy={12} r={4} />
                    <line x1="21.17" x2={12} y1={8} y2={8} />
                    <line x1="3.95" x2="8.54" y1="6.06" y2={14} />
                    <line x1="10.88" x2="15.46" y1="21.94" y2={14} />
                  </svg>{" "}
                  Sign up with Google
                </button>
                <button className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 flex items-center justify-center bg-white border border-gray-300 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 mr-2"
                  >
                    <rect width={14} height={8} x={5} y={2} rx={2} />
                    <rect width={20} height={8} x={2} y={14} rx={2} />
                    <path d="M6 18h2" />
                    <path d="M12 18h6" />
                  </svg>{" "}
                  Sign up with Microsoft
                </button>
              </div> */}
          </form>
        </div>
      </div>

      {/* <div className="flex flex-col items-center pl-20 mt-48 w-full max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <div className="self-start ml-20 text-7xl font-bold text-blue-950 max-md:max-w-full max-md:text-4xl">
          Buy, Sell, Rent.
        </div>
        <div className="self-start mt-10 ml-20 text-3xl font-bold text-blue-950 max-md:max-w-full">
          The best deals, for both Realtors and Customers.
        </div>
        <div className="flex gap-3 self-start mt-11 ml-20 text-xl font-bold text-orange-600 whitespace-nowrap max-md:mt-10 max-md:ml-2.5">
          <div className="grow underline">Explore More</div>
          <img
            loading="lazy"
            src=""
            className="aspect-[1.92] fill-orange-600 stroke-[3px] stroke-orange-600 w-[42px]"
          />
        </div>
        <div className="flex flex-col items-center px-16 pt-7 mt-36 w-full text-center text-white rounded-xl shadow-lg bg-blue-950 max-w-[1130px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex z-10 flex-col mb-0 max-w-full w-[900px] max-md:mb-2.5">
            <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col">
                <div className="text-3xl font-bold uppercase">
                  What Do you need?
                </div>
                <div className="flex gap-5 justify-between mt-7 text-sm whitespace-nowrap">
                  <div>Location</div>
                  <div>Category</div>
                </div>
              </div>
              <div className="flex-auto self-end mt-12 text-sm max-md:mt-10">
                Budget
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-2 text-sm text-stone-500 max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-5 justify-between px-6 py-4 bg-white rounded-xl max-md:px-5">
                <div>Lagos, Nigeria</div>
                <img
                  loading="lazy"
                  src=""
                  className="self-start mt-1 w-2.5 aspect-[1.11] fill-blue-950"
                />
              </div>
              <div className="flex gap-5 justify-between px-6 py-4 bg-white rounded-xl max-md:px-5">
                <div className="flex-auto">3 Bedroom Duplex</div>
                <img
                  loading="lazy"
                  src=""
                  className="self-start w-2.5 aspect-[1.11] fill-blue-950"
                />
              </div>
              <div className="flex gap-5 justify-between px-6 py-4 whitespace-nowrap bg-white rounded-xl max-md:px-5">
                <div className="flex-auto">50,000-150,000</div>
                <img
                  loading="lazy"
                  src=""
                  className="self-start w-2.5 aspect-[1.11] fill-blue-950"
                />
              </div>
            </div>
            <div className="flex gap-1.5 self-end px-16 py-4 mt-5 text-base font-bold whitespace-nowrap bg-orange-600 rounded-xl max-md:px-5">
              <div className="grow">Search MiCasa</div>
              <img loading="lazy" src="" className="aspect-[1.79] w-[25px]" />
            </div>
          </div>
        </div>
        <div className="mt-12 ml-2.5 text-3xl font-bold whitespace-nowrap text-zinc-800 max-md:mt-10">
          How It Works
        </div>
        <div className="flex gap-5 justify-between mt-11 w-full max-w-[1146px] text-zinc-800 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src=""
              className="my-auto aspect-square w-[50px]"
            />
            <div className="flex flex-col flex-1">
              <div className="text-base font-bold">Find A Listing</div>
              <div className="mt-3.5 text-xs">
                Make a choice of the type of apartment <br />
                and qualities that appeal to your interest.
              </div>
            </div>
          </div>
          <div className="flex gap-5 items-start my-auto">
            <img loading="lazy" srcSet="" className="aspect-square w-[50px]" />
            <div className="flex flex-col flex-1">
              <div className="text-base font-bold">Talk to an Agent</div>
              <div className="mt-3.5 text-xs">
                Our Agents are available 24 Hours
                <br />
                Mon-Sat.
              </div>
            </div>
          </div>
          <div className="flex gap-5 justify-between">
            <img
              loading="lazy"
              src=""
              className="my-auto aspect-square w-[50px]"
            />
            <div className="flex flex-col flex-1">
              <div className="text-base font-bold whitespace-nowrap">
                Set the date and Move in!
              </div>
              <div className="mt-4 text-xs">
                Make payments, get reciept and all other important documents,
                set your move-in date.
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-36 w-full whitespace-nowrap max-w-[1130px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 my-auto text-3xl font-bold capitalize text-blue-950">
            <div>Featured Houses</div>
            <div className="shrink-0 mt-3.5 h-0.5 bg-orange-600 rounded-[50px]" />
          </div>
          <div className="flex gap-5 justify-between text-base leading-7 text-zinc-800 max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              srcSet=""
              className="self-start max-w-full aspect-[2.5] rounded-[30px] w-[125px]"
            />
            <img
              loading="lazy"
              srcSet=""
              className="max-w-full border-solid aspect-[2.27] border-[0.974px] border-zinc-800 rounded-[31.172px] w-[116px]"
            />
            <div className="flex gap-2 justify-between px-6 py-3.5 border-solid border-[0.974px] border-zinc-800 rounded-[31.172px] max-md:px-5">
              <img loading="lazy" src="" className="aspect-square w-[23px]" />
              <div className="grow self-start mt-2">Apartment</div>
            </div>
          </div>
          <img
            loading="lazy"
            src=""
            className="max-w-full aspect-[2.27] w-[117px]"
          />
        </div>
        <div className="flex gap-5 justify-between self-end mt-11 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col flex-1 p-3 bg-white rounded-xl">
            <div className="overflow-hidden relative flex-col justify-center items-start px-8 pt-11 pb-56 text-sm font-bold leading-6 text-white whitespace-nowrap aspect-[0.73] max-md:px-5 max-md:pb-10">
              <img
                loading="lazy"
                srcSet=""
                className="object-cover absolute inset-0 size-full"
              />
              New House
            </div>
            <div className="flex gap-5 justify-between pr-2 mt-5">
              <div className="flex-auto text-xl font-bold leading-7 text-zinc-800">
                Ikeja, Lagos
              </div>
              <div className="flex flex-col my-auto">
                <div className="flex gap-4 self-start ml-2.5">
                  <img loading="lazy" src="" className="w-4 aspect-square" />
                  <img loading="lazy" src="" className="w-4 aspect-square" />
                </div>
                <div className="flex gap-1.5 justify-between text-xs font-medium leading-snug text-black whitespace-nowrap">
                  <div className="grow">3 Bedroom</div>
                  <div className="grow">Wi-Fi</div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 justify-between mt-4 text-xl font-medium leading-4 whitespace-nowrap text-blue-950">
              <img
                loading="lazy"
                src=""
                className="self-start aspect-[1.12] w-[9px]"
              />
              <div className="flex-auto">200,000</div>
            </div>
            <div className="flex gap-1 justify-between mt-4 text-xs font-medium leading-normal text-black">
              <img
                loading="lazy"
                srcSet=""
                className="aspect-[2.33] w-[58px]"
              />
              <div className="my-auto">
                have interest in this property
                <br />
              </div>
            </div>
            <div className="flex gap-1 self-center px-14 py-4 mt-4 text-xs font-bold text-center text-white whitespace-nowrap bg-orange-600 rounded-md max-md:px-5">
              <div className="grow">View More</div>
              <img
                loading="lazy"
                src=""
                className="my-auto aspect-[2] w-[18px]"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 p-3 bg-white rounded-xl">
            <div className="flex overflow-hidden relative flex-col gap-1.5 justify-between items-start px-4 py-11 text-sm font-bold leading-6 text-white whitespace-nowrap aspect-[0.73]">
              <img
                loading="lazy"
                srcSet=""
                className="object-cover absolute inset-0 size-full"
              />
              <img
                loading="lazy"
                src=""
                className="w-4 aspect-[0.76] fill-white"
              />
              <div className="relative flex-auto">Popular</div>
            </div>
            <div className="flex gap-5 justify-between pr-2 mt-5">
              <div className="flex-auto text-xl font-bold leading-7 text-zinc-800">
                Jabi, Abuja
              </div>
              <div className="flex flex-col my-auto">
                <div className="flex gap-3.5 self-start ml-2.5">
                  <img loading="lazy" src="" className="w-4 aspect-square" />
                  <img loading="lazy" src="" className="w-4 aspect-square" />
                </div>
                <div className="flex gap-1.5 justify-between text-xs font-medium leading-snug text-black whitespace-nowrap">
                  <div className="grow">3 Bedroom</div>
                  <div className="grow">Wi-Fi</div>
                </div>
              </div>
            </div>
            <div className="flex gap-0.5 justify-between mt-4 text-xl font-medium leading-4 whitespace-nowrap text-blue-950">
              <img
                loading="lazy"
                src=""
                className="self-start w-2.5 aspect-[1.25]"
              />
              <div className="flex-auto">800,000</div>
            </div>
            <div className="flex gap-1.5 justify-between mt-4 text-xs font-medium leading-normal text-black">
              <img
                loading="lazy"
                srcSet=""
                className="aspect-[2.27] w-[57px]"
              />
              <div className="my-auto">
                have interest in this property
                <br />
              </div>
            </div>
            <div className="flex gap-1 self-center px-14 py-4 mt-4 text-xs font-bold text-center text-white whitespace-nowrap bg-orange-600 rounded-md max-md:px-5">
              <div className="grow">View More</div>
              <img
                loading="lazy"
                src=""
                className="my-auto aspect-[1.89] w-[17px]"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 p-3 bg-white rounded-xl">
            <div className="overflow-hidden relative flex-col justify-center items-start px-8 pt-11 pb-56 text-sm font-bold leading-6 text-white whitespace-nowrap aspect-[0.73] max-md:px-5 max-md:pb-10">
              <img
                loading="lazy"
                srcSet=""
                className="object-cover absolute inset-0 size-full"
              />
              New House
            </div>
            <div className="flex gap-5 justify-between mt-5">
              <div className="flex-auto text-xl font-bold leading-7 text-zinc-800">
                Apapa, Lagos
              </div>
              <div className="flex flex-col flex-1 my-auto">
                <div className="flex gap-4 self-start px-px ml-2.5">
                  <img loading="lazy" src="" className="w-4 aspect-square" />
                  <img loading="lazy" src="" className="w-4 aspect-square" />
                </div>
                <div className="flex gap-1.5 justify-between text-xs font-medium leading-snug text-black whitespace-nowrap">
                  <div className="grow">3 Bedroom</div>
                  <div className="grow">Wi-Fi</div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 justify-between mt-4 text-xl font-medium leading-4 whitespace-nowrap text-blue-950">
              <img
                loading="lazy"
                src=""
                className="self-start aspect-[1.12] w-[9px]"
              />
              <div className="flex-auto">50,000</div>
            </div>
            <div className="flex gap-1 justify-between mt-4 text-xs font-medium leading-normal text-black">
              <img
                loading="lazy"
                srcSet=""
                className="aspect-[2.33] w-[58px]"
              />
              <div className="my-auto">
                have interest in this property
                <br />
              </div>
            </div>
            <div className="flex gap-1 self-center px-14 py-4 mt-4 text-xs font-bold text-center text-white whitespace-nowrap bg-orange-600 rounded-md max-md:px-5">
              <div className="grow">View More</div>
              <img
                loading="lazy"
                src=""
                className="my-auto aspect-[1.89] w-[17px]"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 p-3 bg-white rounded-xl">
            <img loading="lazy" srcSet="" className="w-full aspect-[0.72]" />
            <div className="flex gap-5 justify-between pr-2 mt-5">
              <div className="flex flex-col text-xl whitespace-nowrap">
                <div className="font-bold leading-[136%] text-zinc-800">
                  Lekki, Lagos
                </div>
                <div className="flex gap-1 justify-between mt-4 font-medium leading-[89%] text-blue-950">
                  <img
                    loading="lazy"
                    src=""
                    className="self-start aspect-[1.12] w-[9px]"
                  />
                  <div className="flex-auto">200,000</div>
                </div>
              </div>
              <div className="flex flex-col self-start">
                <div className="flex gap-4 self-start ml-2.5">
                  <img loading="lazy" src="" className="w-4 aspect-square" />
                  <img loading="lazy" src="" className="w-4 aspect-square" />
                </div>
                <div className="flex gap-1.5 justify-between text-xs font-medium leading-snug text-black whitespace-nowrap">
                  <div className="grow">3 Bedroom</div>
                  <div className="grow">Wi-Fi</div>
                </div>
              </div>
            </div>
            <div className="flex gap-1.5 justify-between mt-4 text-xs font-medium leading-normal text-black">
              <img
                loading="lazy"
                srcSet=""
                className="aspect-[2.27] w-[57px]"
              />
              <div className="my-auto">
                have interest in this property
                <br />
              </div>
            </div>
            <div className="flex gap-1 self-center px-14 py-4 mt-4 text-xs font-bold text-center text-white whitespace-nowrap bg-orange-600 rounded-md max-md:px-5">
              <div className="grow">View More</div>
              <img
                loading="lazy"
                src=""
                className="my-auto aspect-[2] w-[18px]"
              />
            </div>
          </div>
          <div className="flex flex-col flex-1 px-3.5 py-3 bg-white rounded-xl">
            <div className="overflow-hidden relative flex-col justify-center items-start px-8 pt-11 pb-56 text-sm font-bold leading-6 text-white whitespace-nowrap aspect-[0.73] max-md:px-5 max-md:pb-10">
              <img
                loading="lazy"
                srcSet=""
                className="object-cover absolute inset-0 size-full"
              />
              New House
            </div>
            <div className="flex gap-5 justify-between pr-2 mt-5">
              <div className="flex-auto text-xl font-bold leading-7 text-zinc-800">
                Ikeja, Lagos
              </div>
              <div className="flex flex-col my-auto">
                <div className="flex gap-4 self-start ml-3 max-md:ml-2.5">
                  <div className="my-auto w-3 h-3 bg-zinc-800" />
                  <div className="w-4 h-4" />
                </div>
                <div className="flex gap-1.5 justify-between text-xs font-medium leading-snug text-black">
                  <div>3 Bedroom</div>
                  <div>Wi-Fi</div>
                </div>
              </div>
            </div>
            <div className="flex gap-1 justify-between mt-4 text-xl font-medium leading-4 whitespace-nowrap text-blue-950">
              <img
                loading="lazy"
                src=""
                className="self-start aspect-[1.12] w-[9px]"
              />
              <div className="flex-auto">200,000</div>
            </div>
            <div className="flex gap-1.5 justify-between mt-4 text-xs font-medium leading-normal text-black">
              <img
                loading="lazy"
                srcSet=""
                className="aspect-[2.33] w-[58px]"
              />
              <div className="my-auto">
                have interest in this property
                <br />
              </div>
            </div>
            <div className="justify-center items-start self-center px-14 py-3.5 mt-4 max-w-full text-xs font-bold text-center text-white whitespace-nowrap bg-orange-600 rounded-md w-[193px] max-md:px-5">
              View More
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between items-start mt-28 w-full whitespace-nowrap max-w-[1133px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col text-3xl font-bold capitalize text-blue-950">
            <div>POPULAR CITIES</div>
            <div className="shrink-0 mt-3.5 bg-orange-600 h-[3px] rounded-[50px]" />
          </div>
          <div className="flex gap-3.5 text-xl text-orange-600">
            <div className="grow underline">Explore More</div>
            <img
              loading="lazy"
              src=""
              className="my-auto aspect-[5] fill-orange-600 stroke-[1px] stroke-orange-600 w-[41px]"
            />
          </div>
        </div>
        <div className="mt-12 w-full max-w-[1129px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full">
              <div className="overflow-hidden relative flex-col justify-center items-center px-16 pb-12 text-xl font-bold leading-7 text-white whitespace-nowrap aspect-[0.35] pt-[669px] max-md:px-5 max-md:pt-10 max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet=""
                  className="object-cover absolute inset-0 size-full"
                />
                Lagos
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                srcSet=""
                className="flex-1 grow shrink-0 mt-14 w-full aspect-[0.35] max-md:mt-10"
              />
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="overflow-hidden relative flex-col justify-center items-center px-16 pb-12 text-xl font-bold leading-7 text-white whitespace-nowrap aspect-[0.35] pt-[667px] max-md:px-5 max-md:pt-10 max-md:mt-8">
                <img
                  loading="lazy"
                  srcSet=""
                  className="object-cover absolute inset-0 size-full"
                />
                London
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
              <div className="overflow-hidden relative flex-col grow justify-center items-center px-16 pb-12 mt-14 text-xl font-bold leading-7 text-white whitespace-nowrap aspect-[0.35] pt-[664px] max-md:px-5 max-md:pt-10 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet=""
                  className="object-cover absolute inset-0 size-full"
                />
                Dubai
              </div>
            </div>
          </div>
        </div>
        <div className="flex overflow-hidden relative flex-col justify-center items-start pr-16 mt-32 max-w-full font-bold text-white min-h-[400px] w-[1131px] max-md:pr-5 max-md:mt-10">
          <img
            loading="lazy"
            srcSet=""
            className="object-cover absolute inset-0 size-full"
          />
          <div className="flex relative justify-center items-center px-16 py-12 max-w-full bg-blue-950 bg-opacity-80 w-[580px] max-md:px-5">
            <div className="flex flex-col mt-20 mb-11 max-w-full w-[287px] max-md:my-10">
              <div className="text-3xl">Become a Host</div>
              <div className="mt-5 text-xl font-medium">
                Join thousands of Landlords
                <br />
                and earn an extra income.
              </div>
              <div className="justify-center px-12 py-4 mt-7 text-base text-center bg-orange-600 rounded-xl max-md:px-5">
                Learn More
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="flex overflow-hidden relative flex-col justify-center items-center px-16 py-8 w-full font-bold text-center min-h-[143px] max-md:px-5 max-md:max-w-full bg-blue-950">
        <img
          loading="lazy"
          src=""
          className="object-cover absolute inset-0 size-full"
        />
        <div className="flex relative gap-5 justify-between items-start w-full max-w-[1098px] max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-col mt-2.5 basis-0">
            <div className="text-3xl text-orange-600">
              Mi<span className="text-orange-600">Casa</span>
            </div>
            <div className="flex gap-1.5 justify-between mt-8 text-lg text-white whitespace-nowrap">
              <div className="grow">Rent</div>
              <img
                loading="lazy"
                src=""
                className="my-auto w-2.5 aspect-[1.11] fill-white"
              />
              <div>Buy</div>
              <img
                loading="lazy"
                src=""
                className="my-auto w-2.5 aspect-[1.11] fill-white"
              />
              <div>Sell</div>
              <img
                loading="lazy"
                src=""
                className="my-auto w-2.5 aspect-[1.11] fill-white"
              />
            </div>
          </div>
          <div className="flex gap-5 justify-between text-xl text-white max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-col self-start mt-4 text-orange-600 whitespace-nowrap basis-0">
              <div>Home</div>
              <div className="shrink-0 mt-2.5 h-0.5 bg-orange-600" />
            </div>
            <div className="my-auto">Featured</div>
            <div className="flex-auto self-start mt-4">Holiday Packages</div>
            <div className="flex-auto my-auto">Contact Us</div>
            <img loading="lazy" src="" className="aspect-[1.47] w-[65px]" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Register;
