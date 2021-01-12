import React from "react";
import { wrapper } from "../react-redux/index";
import "../antd.css";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
