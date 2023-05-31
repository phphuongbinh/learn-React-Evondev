import React from "react";
import { Controller, useForm } from "react-hook-form";
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
    setFocus,
    watch,
    reset,
    setValue,
    control,
    formState: { errors, isSubmitting, isValid, isDirty },
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: "onChange",
  });
  const onSubmit = (values) => {
    console.log("send data");
    if (isValid) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
      });
    }
  };
  const watchShowage = watch("showAge", false);
  console.log(watchShowage);
  React.useEffect(() => {
    setFocus("firstName");
  }, [setFocus]);

  const handleSetData = () => {
    setValue("firstName", "Binh");
    setValue("lastName", "Phan");
    setValue("email", "phuongbinhdev@gmail.com");
  };
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
        <MyInput
          name="email"
          placeholder="Enter your email address"
          control={control}
          id="email"
        ></MyInput>
        {/* <input
          type="email"
          className="p-4 rounded-md border border-gray-300"
          id="email"
          placeholder="Enter your email address"
          {...register("email")}
        /> */}
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
        <button
          className="p-2 bg-green-500 text-white rounded-md mt-3"
          onClick={handleSetData}
        >
          Demo Data
        </button>
      </div>
    </form>
  );
};

function MyInput({ control, ...props }) {
  return (
    <Controller
      name={props.name}
      control={control}
      render={({ field }) => (
        <input
          className="p-4 rounded-md border border-gray-300"
          {...field}
          {...props}
        />
      )}
    ></Controller>
  );
}

export default SignUpFormHook;
