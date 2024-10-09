import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import store from "../../shared/store"
import { Cart } from "./components/Cart";

const App = () => (
  <Provider store={store}>
    <Cart />
  </Provider>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)