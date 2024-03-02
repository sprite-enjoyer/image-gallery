import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import HistoryPage from "./HistoryPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
  },
]);

const MyRouterProvider = () => <RouterProvider router={router} />;

export default MyRouterProvider;
