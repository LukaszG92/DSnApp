import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MetaMaskProvider } from "@metamask/sdk-react";

const root = ReactDOM.createRoot(
    document.getElementById("root")
);

root.render(
    <MetaMaskProvider
        debug={false}
        sdkOptions={{
            dappMetadata: {
                name: "DSnApp",
                url: window.location.href,
            },
        }}
    >
        <App />
    </MetaMaskProvider>
);