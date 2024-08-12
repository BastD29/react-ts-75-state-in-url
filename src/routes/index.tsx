import { RouteObject } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { Home, NotFound /* , Store */ } from "./routes";
import PaginatedStore from "../pages/PaginatedStore/PaginatedStore2";
// import { FilterProvider } from "../context/FilterContext/FilterProvider2";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "store",
        // element: (
        //   <FilterProvider>
        //     <Store />
        //   </FilterProvider>
        // ),
        element: <PaginatedStore />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { routes };
