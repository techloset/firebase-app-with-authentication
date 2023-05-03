import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { store } from "./store/Store.jsx";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider,Route } from "react-router-dom";
import "./index.css";
import Login from "./pages/loginPage/Login.jsx";
import Signup from "./pages/signupPage/SignUp.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer />
    </Provider>
  </React.StrictMode>
);
