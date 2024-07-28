import "./App.css";
import Body from "./Components/Body/Body";
import Feed from "./Components/Feed/Feed";
import Navbar from "./Components/Navbar/Navbar";
import WatchPage from "./Components/WatchPage/WatchPage";
import "./Styles/Global.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Feed />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <Navbar />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
