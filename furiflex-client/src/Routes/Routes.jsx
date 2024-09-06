import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import TermsPolicy from "../Pages/TermsPolicy/TermsPolicy";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/terms-policy",
          element: <TermsPolicy />,
        },
      ],
    },
    {
      path: "/sign-in",
      element: <SignIn />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ]);