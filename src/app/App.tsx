import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, HomePage, RequestDemo } from "../pages/home";
import { ChangePassword, ForgotPassword, Login, SignIn } from "../pages/login";

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
]);

const App = () => (
  <div className="mx-auto max-w-[1420px]">
    <RouterProvider router={router} />
  </div>
);

export default App;
