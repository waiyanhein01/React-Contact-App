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
import { useSignInMutation } from "../../store/services/endpoints/apiContact.endpoints";
import { AuthGuard, ContainerComponents } from "../../components";

const signInPage = () => {
  const nav = useNavigate();
  const [fun, data] = useSignInMutation();
  const initialValues = {
    email: "",
    password: "",
  };

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (value, action) => {
    await fun(value);
    action.resetForm(null);
  };

  useEffect(() => {
    if (data?.data?.success) {
      nav("/home");
    } else {
      nav("/");
    }
  }, [data]);

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is Required")
      .email("Invalid email format"),
    password: yup
      .string()
      .required("Password is Required")
      .matches(8, "Password should be longer than 8"),
  });
  return (
    <AuthGuard check={data?.data?.success} token={data?.data?.token} path="/">
      <div className=" bg-blue-gradient">
      <ContainerComponents>
        <div className=" border w-[300px] bg-white-gradient p-5 rounded-lg gap-5 flex flex-col">
          <div className=" text-center">
            <h1 className=" text-xl font-bold">Log In</h1>
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
                  {data.isSuccess && (
                    <Alert variant="outlined" severity="info" sx={{ mb: 2 }}>
                      {data.data.message}
                    </Alert>
                  )}

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

                  <div>
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
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
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

                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, mb: 2 }}
                  >
                    Log In
                    {isSubmitting && (
                      <Loader2 className=" ml-2 h-4 w-4 animate-spin items-center" />
                    )}
                  </Button>

                  <h2 className="  text-sm ">
                    <span>You don't have an account?</span>
                    <Link className="text-blue-500 underline ps-1" to={"sign_up"}>
                      Sign Up
                    </Link>
                  </h2>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </ContainerComponents>
      </div>
    </AuthGuard>
  );
};

export default signInPage;
