import React from "react";
import './../styles/App.css';
import { Provider } from "react-redux";
import store from "./store";
import Lorem from "./Lorem";

const App = () => {
  return (
    <div>
     <Provider store={store}>
      <Lorem />
    </Provider>
    </div>
  )
}

export default App