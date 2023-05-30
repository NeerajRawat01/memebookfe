import { signOutLoadingSelector } from "@/store/selectors/auth.selector";
import { signOut } from "@/store/slices/authSlice";
import { NextPage } from "next";
import Router from "next/router";
import React from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";

type SignoutPageProps = {};

const SignoutPage: NextPage<SignoutPageProps> = () => {
  const dispatch = useDispatch();
  const signOutLoading = useSelector(signOutLoadingSelector);

  return (
    <React.Fragment>
      <div className="flex flex-col md:w-[25rem] mx-auto shadow-xl px-8 py-10 rounded-md gap-6 items-center mt-10">
        <h1>Are you sure you want to Sign Out?</h1>
        <div className="flex gap-4">
          <button
            onClick={Router.back}
            className="bg-gray-400 px-2 py-1 rounded-sm font-semibold"
          >
            Cancel
          </button>
          <button
            onClick={() => dispatch(signOut())}
            className="bg-blue-700 px-2 py-1 rounded-sm text-white"
          >
            {signOutLoading ? (
              <BiLoaderCircle className="animate-spin" />
            ) : (
              "Confirm"
            )}
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};
SignoutPage.defaultProps = {};

export default SignoutPage;
