import {
  signInLoadingSelector,
  signUpLoadingSelector,
} from "@/store/selectors/auth.selector";
import { signIn, signUp } from "@/store/slices/authSlice";
import { Form, Formik } from "formik";
import { NextPage } from "next";
import { useState } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { RiLoginCircleLine } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import { useDispatch, useSelector } from "react-redux";
import { object, string } from "yup";

type SigninPageProps = {};

const SigninPage: NextPage<SigninPageProps> = () => {
  const dispatch = useDispatch();
  const signUpLoading = useSelector(signUpLoadingSelector);
  const signInLoading = useSelector(signInLoadingSelector);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isSignIn, setIsSignIn] = useState(false);
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = object().shape({
    email: string().required("email is required").email("invalid email"),
    password: string().required("password is required"),
  });

  return (
    <div className="flex flex-col gap-6 justify-center mt-10">
      <h2 className="flex justify-center font-bold text-xl">SignUp / SignIn</h2>
      <Formik
        onSubmit={(values) => {
          if (isSignUp) {
            dispatch(signUp(values));
          }
          if (isSignIn) {
            dispatch(signIn(values));
          }
        }}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({
          errors,
          handleSubmit,
          values,
          handleBlur,
          handleChange,
          touched,
        }) => (
          <div className="flex justify-center">
            {/* Form  */}
            <Form className="flex flex-col  text-blue-700 gap-4 px-8 py-4 xs:px-20 xs:py-8 md:px-40 md:py-10 shadow-lg">
              {/* Email  */}
              <div className="flex flex-col gap-2">
                <label className="text-base">Email</label>
                <input
                  placeholder="Enter a valid Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  id="email"
                  className="bg-gray-200 md:w-96 rounded-md px-4 py-2 outline-none"
                  type="email"
                />
                {touched.email && errors.email && (
                  <span className="text-red-400">{errors.email}</span>
                )}
              </div>
              {/* password */}
              <div className="flex flex-col gap-2">
                <label className="text-base">Password</label>
                <input
                  placeholder="Enter a Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  id="password"
                  className="bg-gray-200 md:w-96  rounded-md px-4 py-2 outline-none"
                  type="password"
                />
                {touched.password && errors.password && (
                  <span className="text-red-400">{errors.password}</span>
                )}
              </div>
              {/* action buttons */}
              <div className="flex justify-end gap-3 mt-4">
                <button
                  disabled={signUpLoading}
                  type="submit"
                  onClick={() => {
                    setIsSignUp(true);
                    setIsSignIn(false);
                    handleSubmit;
                  }}
                  className="flex items-center bg-yellow-400 px-3 py-2 gap-2 rounded-md text-white font-semibold"
                >
                  {signUpLoading ? (
                    <BiLoaderCircle className="animate-spin" />
                  ) : (
                    <SiGnuprivacyguard className={`text-md`} />
                  )}
                  SignUp
                </button>
                <button
                  type="submit"
                  onClick={() => {
                    setIsSignIn(true);
                    setIsSignUp(false);
                    handleSubmit;
                  }}
                  className="flex items-center  bg-blue-400 px-3 py-2 gap-2 rounded-md text-white font-semibold"
                >
                  {signInLoading ? (
                    <BiLoaderCircle className="animate-spin" />
                  ) : (
                    <RiLoginCircleLine className="text-xl" />
                  )}
                  SignIn
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};
SigninPage.defaultProps = {};

export default SigninPage;
