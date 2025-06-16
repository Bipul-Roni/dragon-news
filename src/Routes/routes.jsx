import { createBrowserRouter } from "react-router-dom"; 
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../components/Pages/Home";
import CategoryNews from "../components/Pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true, // 👈 correct way to set default route
        element: <Home />,
      },
      {
        path: "category/:id",
        element: <CategoryNews />,
        loader: () => fetch("/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication Layout</h2>,
  },
  {
    path: "/news",
    element: <h2>News Layout</h2>,
  },
  {
    path: "*", // 👈 use "*" instead of "/*"
    element: <h2>Error 404</h2>,
  },
]);

export default router;
