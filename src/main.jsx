import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./utils/Store"; // Ensure the correct path
import App from "./App";
import "../src/index.css"
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
} else {
  console.error("Root element not found");
}


