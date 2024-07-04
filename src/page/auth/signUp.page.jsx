import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup";

const signUpPage = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const handleSubmit = (value) => {
    console.log(value);
  };

  const validationSchema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup
      .string()
      .required("Email is Required")
      .email("Invalid email format"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
      confirm_password: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  return (
    <div className=" w-2/4 h-screen mx-auto flex justify-center items-center">
      <div className=" border w-3/4 p-5 rounded-lg gap-5 flex flex-col">
        <div className=" text-center">
          <h1 className=" text-xl font-bold">Sign Up</h1>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ handleChange, handleBlur, values, isSubmitting }) => (
            <>
              <Form>
                <label htmlFor="name">Name</label>
                <input
                  className=" w-full rounded-lg py-1 ps-2 border outline-none mt-2 mb-2"
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className=" text-sm text-red-500"
                />

                <label htmlFor="email">Email</label>
                <input
                  className=" w-full rounded-lg py-1 ps-2 border outline-none mt-2 mb-2"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className=" text-sm text-red-500"
                />

                <label htmlFor="password">Password</label>
                <input
                  className=" w-full rounded-lg py-1 ps-2 border outline-none mt-2 mb-2"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage
                  name="password"
                  component="p"
                  className=" text-sm text-red-500"
                />

                <label htmlFor="confirm_password">Confirm Password</label>
                <input
                  className=" w-full rounded-lg py-1 ps-2 border outline-none mt-2 mb-2"
                  type="password"
                  name="confirm_password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirm_password}
                />
                <ErrorMessage
                  name="confirm_password"
                  component="p"
                  className=" text-sm text-red-500"
                />

                <button
                  disabled={isSubmitting}
                  type="submit"
                  className=" w-full bg-blue-500 text-white rounded-lg py-2 mt-3 mb-3"
                >
                  Sign Up
                </button>
                <h2 className=" text-blue-500 text-sm underline">
                  <Link to={"/"}>Already have an account?</Link>
                </h2>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default signUpPage;
