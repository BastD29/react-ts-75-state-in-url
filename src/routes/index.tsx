import { RouteObject } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Home, NotFound, Store } from "./routes";
import { FilterProvider } from "../context/FilterContext/FilterProvider2";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "store",
        element: (
          <FilterProvider>
            <Store />
          </FilterProvider>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { routes };
