import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { createBrowserRouter } from "react-router-dom";
import TermsPolicy from "../Pages/TermsPolicy/TermsPolicy";
import Products from "../Pages/Products/Products";
import Categories from "../Pages/Categories/Categories";
import Custom from "../Pages/Custom/Custom";
import Blog from "../Pages/Blog/Blog";
import PdDetails from "../Pages/PdDetails/PdDetails";
import Cart from "../Pages/Cart/Cart";
import PrivateRoutes from "./PrivateRoutes";
import SingleProduct from "../components/SingleProduct/SingleProduct";

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
        path: "/products",
        element: <Products />,
      },
      {
        path: "/product-details/:id",
        element: <PdDetails />,
        loader : SingleProduct ,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/custom",
        element: <Custom />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/cart",
        element: <PrivateRoutes> <Cart /> </PrivateRoutes> ,
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
