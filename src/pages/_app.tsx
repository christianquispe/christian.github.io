import withRedux from "next-redux-wrapper";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Store } from "redux";
import assembleStore from "../redux/store";

interface MyAppProps extends AppProps {
  store: Store;
}

function MyApp({ Component, pageProps, store }: MyAppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default withRedux(assembleStore)(MyApp);
