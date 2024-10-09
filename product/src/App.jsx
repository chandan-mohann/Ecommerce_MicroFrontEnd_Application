import React from "react";
import ReactDOM from "react-dom/client";
import { Product } from "./components/Product";
import store from "../../shared/store"
import { Provider } from 'react-redux'

const App = () => (
  <Provider store={store}>
    <Product/>
    </Provider>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)