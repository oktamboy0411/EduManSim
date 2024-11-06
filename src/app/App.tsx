import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, HomePage, RequestDemo } from "../pages/home";
import { ChangePassword, ForgotPassword, Login, SignIn } from "../pages/login";
import { MainBox } from "../pages/main";
import { Profile } from "../pages/main/components/profile";
import { Leads } from "../pages/main/components/leads";
// import { CEOGetFunction } from "../axios/functions";
import { AlertCustom } from "../components/common";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "request_demo",
        element: <RequestDemo />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    children: [
      {
        path: "",
        element: <SignIn />,
      },
      {
        path: "forgot_password",
        element: <ForgotPassword />,
      },
      {
        path: "change_password",
        element: <ChangePassword />,
      },
    ],
  },
  {
    path: "/main",
    element: <MainBox />,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "leads",
        element: <Leads />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="mx-auto max-w-[1420px]">
      {/* <CEOGetFunction /> */}
      <AlertCustom />
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
