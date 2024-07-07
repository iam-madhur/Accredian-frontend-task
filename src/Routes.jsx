import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import ReferEarnPage from "pages/ReferEarnPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <ReferEarnPage /> },
    { path: "*", element: <NotFound /> },
  ]);

  return element;
};

export default ProjectRoutes;

// const ProjectRoutes = () => {
//   let element = useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "*", element: <NotFound /> },
//     {
//       path: "referearnpage",
//       element: <ReferEarnPage />,
//     },
//   ]);

//   return element;
// };
