import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// const validate = (values) => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = "Required";
//   } else if (values.firstName.length > 20) {
//     errors.firstName = "Must be 20 or than less";
//   }
//   if (!values.lastName) {
//     errors.lastName = "Required";
//   } else if (values.lastName.length > 20) {
//     errors.lastName = "Must be 20 or than less";
//   }
//   return errors;
// };

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      lastName: Yup.string()
        .max(10, "Must be 10 characters or less")
        .required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik.getFieldProps("firstName"));
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full max-w-[500px] mx-auto"
      autoComplete="off"
    >
      <div className="flex flex-col gap-4 mb-4">
        <label htmlFor="firstName">Firstname</label>
        <input
          className="p-4 rounded-md border border-gray-300"
          id="firstName"
          placeholder="Enter your first name"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName && (
          <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
        )}
      </div>
      <div className="flex flex-col gap-4 mb-4">
        <label htmlFor="lastName">Lastname</label>
        <input
          className="p-4 rounded-md border border-gray-300"
          id="lastName"
          placeholder="Enter your first name"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName && (
          <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
        )}
      </div>
      <div>
        <button
          type="submit"
          className="w-full p-4 rounded-lg bg-blue-600 font-semibold text-white"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default SignUpForm;
