import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as yup from "yup"

const signInPage = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (value) => {
    console.log(value);
  };

  const validationSchema = yup.object({
    email: yup.string().required("Email is Required").email("Invalid email format"),
    password: yup.string().required("Password is Required").matches(8,"Password should be longer than 8")
  })
  return (
    <div className=" w-2/4 h-screen mx-auto flex justify-center items-center">
      <div className=" border w-3/4 p-5 rounded-lg gap-5 flex flex-col">
        <div className=" text-center">
          <h1 className=" text-xl font-bold">Sign In</h1>
        </div>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          {({ handleChange, handleBlur, values,isSubmitting }) => (
            <>
              <Form >
                <label htmlFor="email">Email</label>
                <input
                  className=" w-full rounded-lg py-1 ps-2 border outline-none mt-2 mb-2"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <ErrorMessage name="email" component="p" className=" text-sm text-red-500"/>

                <label htmlFor="password">Password</label>
                <input
                  className=" w-full rounded-lg py-1 ps-2 border outline-none mt-2"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                <ErrorMessage name="password" component="p" className=" text-sm text-red-500"/>

                <button
                disabled={isSubmitting}
                  type="submit"
                  className=" w-full bg-blue-500 text-white rounded-lg py-2 mt-5 mb-3"
                >
                  Sign In
                </button>
                <h2 className=" text-blue-500 text-sm underline">
                <Link to={"sign_up"}>You don't have an account?</Link>
                  
                </h2>
              </Form>
            </>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default signInPage;
