import React from "react";
import { useFormik } from "formik";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik);
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-[500px] mx-auto"
    >
      <div className="flex flex-col gap-4 mb-4">
        <label htmlFor="firstName">Firstname</label>
        <input
          className="p-4 rounded-md border border-gray-300"
          name="firstName"
          id="firstName"
          placeholder="Enter your first name"
        />
      </div>
      <div>
        <button className="w-full p-4 rounded-lg bg-blue-600 font-semibold text-white">
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
