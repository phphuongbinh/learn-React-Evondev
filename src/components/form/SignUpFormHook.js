import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required("Please enter your first name")
    .max(10, "Must be 10 characters or less"),
});

const SignUpFormHook = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  const onSubmit = (values) => {
    if (isValid) {
      console.log("send data to backend");
    }
  };
  const watchShowage = watch("showAge", false);
  console.log(watchShowage);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-4 mb-4">
        <label htmlFor="firstName">Firstname</label>
        <input
          className="p-4 rounded-md border border-gray-300"
          id="firstName"
          placeholder="Enter your first name"
          {...register("firstName", {
            required: true,
            maxLength: 10,
          })}
        />
        {errors?.firstName?.message && (
          <div className="text-red-500 text-sm">{errors.firstName.message}</div>
        )}
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <label htmlFor="lastName">Lastname</label>
        <input
          className="p-4 rounded-md border border-gray-300"
          id="lastName"
          placeholder="Enter your first name"
          {...register("lastName")}
        />
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <label htmlFor="email">Email address</label>
        <input
          type="email"
          className="p-4 rounded-md border border-gray-300"
          id="email"
          placeholder="Enter your email address"
          {...register("email")}
        />
      </div>
      <div>
        <input type="checkbox" id="showAge" {...register("showAge")} />
      </div>

      {watchShowage && (
        <input
          type="number"
          id="age"
          placeholder="Enter choose your age"
          {...register("age", { min: 50 })}
        />
      )}
      <div>
        <button
          type="submit"
          className="w-full p-4 rounded-lg bg-blue-600 font-semibold text-white"
        >
          {isSubmitting ? (
            <div className="mx-auto w-5 h-5 border-2 border-white border-t-2 border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
};

export default SignUpFormHook;
