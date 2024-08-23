import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import TestPage from "../pages/TestPage";

export const mainRouter = createBrowserRouter([
  {
    path: "/", // uri 경로
    element: <App />, // 해당 경로에 표시될 내용.
  },
  {
    path: "/test", // uri 경로
    element: <TestPage />, // 해당 경로에 표시될 내용.
  },
]);
