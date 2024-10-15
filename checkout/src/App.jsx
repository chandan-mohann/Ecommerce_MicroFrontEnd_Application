import { Checkout } from "./components/Checkout";
import React from "react";
import ReactDOM from "react-dom/client";

const App = () =>  <Checkout/>
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)