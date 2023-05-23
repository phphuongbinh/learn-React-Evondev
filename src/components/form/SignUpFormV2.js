import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        intro: "",
        jobs: "",
        term: false,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, "Must be 20 characters or less")
          .required("Required"),
        lastName: Yup.string()
          .max(10, "Must be 10 characters or less")
          .required("Required"),
        email: Yup.string().email().required(),
        intro: Yup.string().required(),
        jobs: Yup.string().required(),
        term: Yup.boolean(),
      })}
      onSubmit={(value) => {
        console.log(value);
      }}
      autoComplete="off"
    >
      <Form className="w-full max-w-[500px] mx-auto">
        <div className="flex flex-col gap-4 mb-4">
          <label htmlFor="firstName">Firstname</label>
          <Field
            name="firstName"
            type="text"
            placeholder="Enter your first name"
            className="p-4 rounded-md border border-gray-300"
          ></Field>
          <div className="text-red-500 font-semibold">
            <ErrorMessage name="firstName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <label htmlFor="lastName">Lastname</label>
          <Field
            name="lastName"
            type="text"
            placeholder="Enter your last name"
            className="p-4 rounded-md border border-gray-300"
          ></Field>
          <div className="text-red-500 font-semibold">
            <ErrorMessage name="lastName"></ErrorMessage>
          </div>
        </div>
        <div className="flex flex-col gap-4 mb-4">
          <label htmlFor="lastName">Email Address</label>
          <Field
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="p-4 rounded-md border border-gray-300"
          ></Field>
          <div className="text-red-500 font-semibold">
            <ErrorMessage name="email"></ErrorMessage>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="w-full p-4 rounded-lg bg-blue-600 font-semibold text-white"
          >
            Submit
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpFormV2;
