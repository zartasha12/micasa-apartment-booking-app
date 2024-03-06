import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../context/AppContext.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "../style";

const SignIn = () => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const mutation = useMutation(apiClient.signIn, {
    onSuccess: async () => {
      console.log("user has been signed in");
      showToast({ message: "Sign in Successful!", type: "SUCCESS" });
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
    // <form className="flex flex-col gap-5" onSubmit={onSubmit}>
    //   <h2 className="text-3xl font-bold">Sign In</h2>
    //   <label className="text-gray-700 text-sm font-bold flex-1">
    //     Email
    //     <input
    //       type="email"
    //       className="border rounded w-full py-1 px-2 font-normal"
    //       {...register("email", { required: "This field is required" })}
    //     ></input>
    //     {errors.email && (
    //       <span className="text-red-500">{errors.email.message}</span>
    //     )}
    //   </label>
    //   <label className="text-gray-700 text-sm font-bold flex-1">
    //     Password
    //     <input
    //       type="password"
    //       className="border rounded w-full py-1 px-2 font-normal"
    //       {...register("password", {
    //         required: "This field is required",
    //         minLength: {
    //           value: 6,
    //           message: "Password must be at least 6 characters",
    //         },
    //       })}
    //     ></input>
    //     {errors.password && (
    //       <span className="text-red-500">{errors.password.message}</span>
    //     )}
    //   </label>
    //   <span className="flex items-center justify-between">
    //     <span className="text-sm">
    //       Not Registered?{" "}
    //       <Link className="underline" to="/register">
    //         Create an account here
    //       </Link>
    //     </span>
    //     <button
    //       type="submit"
    //       className="flex items-center font-bold  bg-[#ff5622dd] text-white  h-[40px] w-auto rounded-md px-3 ml-6"
    //     >
    //       Login
    //     </button>
    //   </span>
    // </form>
    <form onSubmit={onSubmit}>
      <div className="flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md mx-auto space-y-8">
          <div className="space-y-4">
            <span className={`${styles.logoheading} text-transparent `}>
              <Link to="/" className="text-white">
                <span>Mi</span>
                <span className="text-[#ff5722]">Casa</span>
              </Link>
            </span>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">Login</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Enter your email below to login to your account
              </p>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="email"
                  placeholder="m@example.com"
                  required=""
                  type="email"
                  {...register("email", { required: "This field is required" })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    className="ml-auto inline-block text-sm underline"
                    to=""
                  >
                    Forgot your password?
                  </Link>
                </div>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="password"
                  required=""
                  type="password"
                  {...register("password", {
                    required: "This field is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </div>
              <div className="space-y-2">
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-white hover:bg-primary/90 h-10 px-4 py-2 w-full"
                  type="submit"
                >
                  Login
                </button>
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                  Login with Google
                </button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              <span className="text-sm">
                Not Registered?{" "}
                <Link className="underline" to="/register">
                  Create an account here
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignIn;
