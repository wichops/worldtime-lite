import React from "react";
import ReactDOM from "react-dom";

import Layout from "./ui/Layout";

function App() {
  return <Layout />;
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
