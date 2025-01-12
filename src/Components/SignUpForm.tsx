import React from "react";
import { useForm } from "react-hook-form";

type TInputs = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  password: string;
};

export const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TInputs>({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    defaultValues: {
      firstName: "",
      lastName: "",
      emailAddress: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="h-full flex-center">
      <div className="inputWrapperStyle bg-Blue lg:mb-4 text-center lg:py-4 sm:mb-4">
        <p className="font-normal text-gray-300 sm:text-xs">
          <span className="font-extrabold text-white">
            Try it free for 7 days
          </span>{" "}
          then $20/mo. thereafter
        </p>
      </div>
      <div className="bg-gray-100 inputWrapperStyle flex-center">
        <form
          className="lg:p-4 lg:space-y-4 w-full sm:p-2"
          onSubmit={onSubmit}
        >
          {/* First Name */}
          <div className="relative">
            <input
              type="text"
              placeholder={errors?.firstName ? "" : "First Name"}
              className={`inputStyle placeholder-gray-500 ${
                errors?.firstName ? "border-red-500" : "border-gray-300"
              }`}
              {...register("firstName", {
                required: "First Name cannot be empty",
                minLength: 3,
                maxLength: 50,
              })}
            />
            {errors?.firstName && (
              <img
                src="/images/icon-error.svg"
                alt="Error"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            )}
          </div>
          {errors.firstName && (
            <p className="text-error">{errors.firstName.message}</p>
          )}

          {/* Last Name */}
          <div className="relative">
            <input
              type="text"
              placeholder={errors?.lastName ? "" : "Last Name"}
              className={`inputStyle placeholder-gray-500 ${
                errors?.lastName ? "border-red-500" : "border-gray-300"
              }`}
              {...register("lastName", {
                required: "Last Name cannot be empty",
                minLength: 3,
                maxLength: 50,
              })}
            />
            {errors?.lastName && (
              <img
                src="/images/icon-error.svg"
                alt="Error"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            )}
          </div>
          {errors.lastName && (
            <p className="text-error">{errors.lastName.message}</p>
          )}

          {/* Email Address */}
          <div className="relative">
            <input
              type="email"
              placeholder={
                errors.emailAddress ? "email@example.com" : "Email Address"
              }
              className={`inputStyle placeholder-gray-500 ${
                errors.emailAddress ? "border-red-500" : "border-gray-300"
              }`}
              {...register("emailAddress", {
                required: "Looks like this is not an email",
                pattern: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              })}
            />
            {errors?.emailAddress && (
              <img
                src="/images/icon-error.svg"
                alt="Error"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            )}
          </div>
          {errors.emailAddress && (
            <p className="text-error">{errors.emailAddress.message}</p>
          )}

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              placeholder={errors.password ? "" : "Password"}
              className={`inputStyle placeholder-gray-500 ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              {...register("password", {
                required: "Password cannot be empty",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />
            {errors?.password && (
              <img
                src="/images/icon-error.svg"
                alt="Error"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            )}
          </div>
          {errors.password && (
            <p className="text-error">{errors.password.message}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="inputStyle bg-green-500 text-white font-extrabold hover:opacity-80 cursor-pointer"
          >
            Claim your free trial
          </button>
        </form>
        <p className="lg:text-xs text-gray-500 lg:m-2 text-center sm:m-1 sm:text-xs leading-8">
          By clicking the button, you are agreeing to our{" "}
          <a href="#" className="text-red-500 font-bold">
            Terms and Services
          </a>
        </p>
      </div>
    </div>
  );
};
