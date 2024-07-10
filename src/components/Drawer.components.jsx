import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { GoPlus } from "react-icons/go";
import { HiOutlineX } from "react-icons/hi";
import { ErrorMessage, Form, Formik } from "formik";
import * as yup from "yup";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import { Loader2 } from "lucide-react";
import { useCreateContactMutation } from "../store/services/endpoints/contant.endpoinds";

const DrawerComponents = () => {
  const [fun,{data,isLoading,isError,isSuccess}] = useCreateContactMutation()
  console.log(data)

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const closeRef = React.useRef()

  const initialValues = {
    name: "",
    phone: "",
    email: "",
    address: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: yup
      .string()
      .matches(/^[0-9]+$/, "Phone number must be only digits")
      .min(10, "Phone number must be at least 10 digits")
      .required("Phone number is required"),
    address: yup.string().required("Address is required"),
  });

  const handleSubmit = async(value, action) => {
    await fun(value);
    action.resetForm(null);
  };

  return (
    <div>
      <Button variant="contained" color="primary" size="small" onClick={toggleDrawer(true)}>
        <GoPlus className=" w-6 h-6" />
        Create Contact
      </Button>
      <Drawer open={open}>
        <Box sx={{ width: 300, padding: 2 }} role="presentation">
          <div className=" h-full">
            <div className=" flex justify-between">
              <h1 className="">Create Contact</h1>

              <button
                onClick={toggleDrawer(false)}
                className=" focus:scale-90 duration-200"
              >
                <HiOutlineX className=" w-6 h-6 border border-slate-500 rounded-md" />
              </button>
            </div>

            <div className="mt-5 ">
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
                validateOnBlur={false}
                validateOnChange={false}
              >
                {({ handleChange, handleBlur, values, isSubmitting }) => (
                  <>
                    <Form className="flex flex-col h-[520px]">
                      <div>
                        <div className=" mb-5">
                          <FormControl
                            className=" w-full mb-5"
                            variant="outlined"
                          >
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
                          <FormControl
                            className=" w-full mb-5"
                            variant="outlined"
                          >
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

                        <div className=" mb-5">
                          <FormControl
                            className=" w-full mb-5"
                            variant="outlined"
                          >
                            <InputLabel htmlFor="phone" size="small">
                              Phone
                            </InputLabel>
                            <OutlinedInput
                              size="small"
                              id="phone"
                              name="phone"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}
                              label="Phone"
                            />
                          </FormControl>

                          <ErrorMessage
                            name="phone"
                            component="p"
                            className=" text-sm text-red-500 mb-3"
                          />
                        </div>

                        <div className=" mb-5">
                          <FormControl
                            className=" w-full mb-5"
                            variant="outlined"
                          >
                            <InputLabel htmlFor="address" size="small">
                              Address
                            </InputLabel>
                            <OutlinedInput
                              size="small"
                              id="address"
                              name="address"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.address}
                              label="Address"
                            />
                          </FormControl>

                          <ErrorMessage
                            name="address"
                            component="p"
                            className=" text-sm text-red-500 mb-3"
                          />
                        </div>
                      </div>

                      <div className=" flex gap-3 mt-auto">
                        <Button
                          onClick={toggleDrawer(false)}
                          type="button"
                          fullWidth
                          variant="outlined"
                        >
                          Cancel
                        </Button>

                        <Button
                        ref={closeRef}
                          disabled={isSubmitting}
                          type="submit"
                          fullWidth
                          variant="contained"
                        >
                          Create
                          {isSubmitting && (
                            <Loader2 className=" ml-2 h-4 w-4 animate-spin items-center" />
                          )}
                        </Button>
                      </div>
                    </Form>
                  </>
                )}
              </Formik>
            </div>
          </div>
        </Box>
      </Drawer>
    </div>
  );
}

export default DrawerComponents

