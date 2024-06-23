import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AddContact from "../Pages/AddContact";
import AllContacts from "../Pages/AllContacts";
import Home from "../Pages/Home";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-contact",
        element: <AddContact />,
      },
      {
        path: "/all-contacts",
        element: <AllContacts />,
      },
    ],
  },
]);
