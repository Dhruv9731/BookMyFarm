import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home/Home";
import BookNow from "./Componants/Book/BookNow";
import Login from "./Pages/Authentication/Signin/Login";
import Signup from "./Pages/Authentication/Signup/Signup";
import ForgotPassword from "./Pages/Authentication/Signin/ForgotPassword";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path : "/BookNow",
          element : <BookNow />,
        }
      ],
    },
    {
      path : "/Login",
      element : <Login />
    },
    {
      path : "/Signup",
      element : <Signup />
    },
    {
      path : "/ForgotPassword",
      element : <ForgotPassword />
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
