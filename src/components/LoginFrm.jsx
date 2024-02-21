import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginForm from "./LoginForm";

const LoginFrm = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginForm />,
    },
  ]);

  return (
    <div className="">
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default LoginFrm;
