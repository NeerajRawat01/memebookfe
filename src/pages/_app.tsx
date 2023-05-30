import NavBar from "@/components/NavBar";
import { auth } from "@/firebase/firebase";
import wrapper from "@/store";
import { currentUser } from "@/store/slices/userSlice";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";

import { Provider } from "react-redux";

const MyApp: React.FC<AppProps> = ({ Component, ...rest }) => {
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        store.dispatch(currentUser({ user, verifyingUser: false }));
      } else {
        store.dispatch(currentUser({ verifyingUser: false }));
        // User is signed out.
      }
    });
  }, []);
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <div>
      <Provider store={store}>
        <NavBar />
        <Component {...props.pageProps} />
      </Provider>
    </div>
  );
};

export default MyApp;
