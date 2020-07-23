// import App from 'next/app';
// import { Provider } from 'react-redux';
// import React from 'react';
// import withRedux from "next-redux-wrapper";
// import store from '../store/configureStore';
// import '../assets/styles/reset.css'

// class MyApp extends App {

//     static async getInitialProps({ Component, ctx }) {
//         const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

//         //Anything returned here can be accessed by the client
//         return { pageProps };
//     }

//     render() {
//         //pageProps that were returned  from 'getInitialProps' are stored in the props i.e. pageprops
//         const { Component, pageProps, store } = this.props;
//         console.log("store : ", { store });

//         return (
//             <Provider store={store}>
//                 <Component {...pageProps} />
//             </Provider>
//         );
//     }
// }

// //makeStore function that returns a new store for every request
// const makeStore = () => store;
// //withRedux wrapper that passes the store to the App Component
// export default withRedux(makeStore)(MyApp);

import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from "../store/configureStore";
import '../assets/styles/reset.css'

const MyApp = props => {
    const { Component, pageProps } = props;
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {};

    console.log("pageProps", pageProps);
    return { pageProps };
};

//makeStore function that returns a new store for every request
const makeStore = () => store;

export default withRedux(makeStore)(MyApp);