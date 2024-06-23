import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import AddContact from "../Pages/AddContact";
import AllContacts from "../Pages/AllContacts";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
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
