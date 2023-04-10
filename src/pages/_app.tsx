import NavBar from "@/components/NavBar";
import wrapper from "@/store";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Provider } from "react-redux";

const MyApp: React.FC<AppProps> = ({ Component, ...rest }) => {
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
