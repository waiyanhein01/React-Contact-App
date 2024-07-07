import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Alert,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { ErrorMessage, Form, Formik } from "formik";
import { Loader2 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useSignUpMutation } from "../../store/services/endpoints/apiContact.endpoints";

const signUpPage = () => {
  const nav = useNavigate()
  const [fun, data] = useSignUpMutation();
  console.log(data)
  const initialValues = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const [showCPassword, setShowCPassword] = useState(false);

  const handleClickShowCPassword = () => setShowCPassword((show) => !show);

  const handleSubmit = async (value) => {
    await fun(value);
  };

useEffect(() => {
  if(data.data) {
    nav("/")
  }
},[data])

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
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  return (
    <div className=" w-2/4 lg:w-1/3 h-screen mx-auto flex justify-center items-center">
      <div className=" border w-3/4 p-5 rounded-lg gap-5 flex flex-col">
        <div className=" text-center">
          <h1 className=" text-xl font-bold">Sign Up</h1>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange={false}
        >
          {({ handleChange, handleBlur, values, isSubmitting }) => (
            <>
              <Form>
                {data.isError && <Alert variant="filled" severity="error" sx={{mb:2}}>
                  {data.error.error}
                </Alert>}
                
                <div className=" mb-5">
                  <FormControl className=" w-full mb-5" variant="outlined">
                    <InputLabel htmlFor="name" size="small">
                      Name
                    </InputLabel>
                    <OutlinedInput
                      size="small"
                      id="name"
                      name="name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name}
                      label="Name"
                    />
                  </FormControl>

                  <ErrorMessage
                    name="name"
                    component="p"
                    className=" text-sm text-red-500 mb-3"
                  />
                </div>

                <div className=" mb-5">
                  <FormControl className=" w-full mb-5" variant="outlined">
                    <InputLabel htmlFor="email" size="small">
                      Email
                    </InputLabel>
                    <OutlinedInput
                      size="small"
                      id="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      label="Email"
                    />
                  </FormControl>

                  <ErrorMessage
                    name="email"
                    component="p"
                    className=" text-sm text-red-500 mb-3"
                  />
                </div>

                <div className="mb-5">
                  <FormControl className=" w-full" variant="outlined">
                    <InputLabel htmlFor="password" size="small">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      size="small"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>

                  <ErrorMessage
                    name="password"
                    component="p"
                    className=" text-sm text-red-500"
                  />
                </div>

                <div className="">
                  <FormControl className=" w-full" variant="outlined">
                    <InputLabel htmlFor="password_confirmation" size="small">
                      Confirm Password
                    </InputLabel>
                    <OutlinedInput
                      size="small"
                      id="password_confirmation"
                      type={showCPassword ? "text" : "password"}
                      name="password_confirmation"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password_confirmation}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password_confirmation visibility"
                            onClick={handleClickShowCPassword}
                            edge="end"
                          >
                            {showCPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Confirm Password"
                    />
                  </FormControl>

                  <ErrorMessage
                    name="password_confirmation"
                    component="p"
                    className=" text-sm text-red-500"
                  />
                </div>

                <Button
                  disabled={isSubmitting}
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 2, mb: 2 }}
                >
                  Sign Up
                  {isSubmitting && (
                    <Loader2 className=" ml-2 h-4 w-4 animate-spin items-center" />
                  )}
                </Button>
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
