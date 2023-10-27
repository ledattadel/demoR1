import { BrowserRouter as Router, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageRender from "./PageRender";
import { Empty } from "antd";
import NotFound from "./components/global/NotFound";
import { Login, Root } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound></NotFound>,
  },
  {
    path: "/:page/:slug",
    element: <PageRender />,
    // errorElement:<NotFound></NotFound>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
