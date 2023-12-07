import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import SharedLayOut from "./components/layout/SharedLayout";
import About from "./pages/About";
import ParentsPage from "./pages/ParentsPage";
import SchoolsPage from "./pages/SchoolsPage";
import BusesPage from "./pages/BusesPage";
import LogIn from "./pages/LogIn";

function App() {
  const Router = createBrowserRouter([
    {
      path: "/",
      element: <SharedLayOut />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "/parents",
          element: <ParentsPage />,
        },
        {
          path: "/schools",
          element: <SchoolsPage />,
        },

        {
          path: "/buses",
          element: <BusesPage />,
        },
        {
          path: "/login",
          element: <LogIn />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={Router} />
    </>
  );
}

export default App;
