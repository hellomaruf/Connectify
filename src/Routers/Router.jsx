import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AddContact from "../Pages/AddContact";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/add-contact",
        element: <AddContact />,
      },
    ],
  },
]);
