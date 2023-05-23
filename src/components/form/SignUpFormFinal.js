import React, { Children } from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";

const SignUpFormFinal = () => {
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
      // validationSchema={Yup.object({
      //   firstName: Yup.string()
      //     .max(20, "Must be 20 characters or less")
      //     .required("Required"),
      //   lastName: Yup.string()
      //     .max(10, "Must be 10 characters or less")
      //     .required("Required"),
      //   email: Yup.string().email().required("Required"),
      //   intro: Yup.string().required("Required"),
      //   jobs: Yup.string().required("Required"),
      //   term: Yup.boolean().oneOf([true], "Please check terms and conditions"),
      // })}
      onSubmit={(value, actions) => {
        setTimeout(() => {
          actions.resetForm({
            firstName: "",
            lastName: "",
            email: "",
            intro: "",
            jobs: "",
            term: false,
          });
          actions.setSubmitting(false);
        }, 5000);
      }}
      autoComplete="off"
    >
      {(formik) => {
        return (
          <Form className="w-full max-w-[500px] mx-auto">
            <MyInput
              label="Firstname"
              name="firstName"
              id="firstName"
              placeholder="Enter your first name"
            ></MyInput>
            <MyInput
              label="LastName"
              name="lastName"
              id="lastName"
              placeholder="Enter your last name"
            ></MyInput>
            <MyInput
              label="Email address"
              name="email"
              id="email"
              type="email"
              placeholder="Enter your email address"
            ></MyInput>
            <MyTextarea
              label="Introduce yourself"
              name="intro"
              id="intro"
              placeholder="Enter your introduce"
            ></MyTextarea>
            <MySelect
              label="Your Job"
              name="jobs"
              id="jobs"
              placeholder="Select your job"
            >
              <option value="frontend">Frontend Developer</option>
              <option value="backend">Backend Developer</option>
              <option value="fullstack">Fullstack Developer</option>
            </MySelect>
            <MyCheckbox name="term">
              <p>I accept the terms and conditions</p>
            </MyCheckbox>

            <div>
              <button
                type="submit"
                className={`w-full p-4 rounded-lg ${
                  formik.isSubmitting ? "bg-red-500" : "bg-blue-600"
                } font-semibold text-white`}
                disabled={formik.isSubmitting}
              >
                Submit
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

const MyInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-4 mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input
        type="text"
        className="p-4 rounded-md border border-gray-300"
        {...field}
        {...props}
      />
      {meta.error && meta.touched ? (
        <div className="text-red-500 font-semibold">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyTextarea = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-4 mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <textarea
        className="p-4 rounded-md border border-gray-300 h-[200px] resize-none"
        {...field}
        {...props}
      />
      {meta.error && meta.touched ? (
        <div className="text-red-500 font-semibold">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-4 mb-4">
      <label htmlFor={props.id || props.name}>{label}</label>
      <select
        className="p-4 rounded-md border border-gray-300"
        {...field}
        {...props}
      ></select>
      {meta.error && meta.touched ? (
        <div className="text-red-500 font-semibold">{meta.error}</div>
      ) : null}
    </div>
  );
};

const MyCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-4 mb-4">
      <label id={props.id} className="flex items-center gap-2">
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
      {meta.error && meta.touched ? (
        <div className="text-red-500 font-semibold">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default SignUpFormFinal;
