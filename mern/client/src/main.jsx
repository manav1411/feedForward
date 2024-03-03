import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Record from "./components/Record";
import RecordList from "./components/RecordList";
import MapsApi from "./components/MapsApi"
import Homepage from "./components/Homepage"
import CreateAccount from "./components/CreateAccount"
import "./index.css";

//NOTE: everything is in terms of some-provider. need to implement multiple providers. so routes can go /other-provider, etc.
//TODO: when 'make account' clicked on landing page, create /route for that account name.


const router = createBrowserRouter([
  {
    path: "/homepage",
    element: <App />,
    children: [
      {
        path: "/homepage",
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <RecordList />,
      },
    ],
  },
  {
    path: "/edit/:id",
    element: <App />,
    children: [
      {
        path: "/edit/:id",
        element: <Record />,
      },
    ],
  },
  {
    path: "/create",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Record />,
      },
    ],
  },
  {
    path: "/map",
    element: <App />,
    children: [
      {
        path: "/map",
        element: <MapsApi />,
      },
    ],
  },
  {
<<<<<<< HEAD
    path: "/createAccount",
    element: <App />,
    children: [
      {
        path: "/createAccount",
        element: <CreateAccount />,
=======
    path: "/signup",
    element: <App />,
    children: [
      {
        path: "/signup",
        element: <SignUp />,
>>>>>>> 9e167a4c36920a48705ba0a97f1e2f629f7c9832
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);