import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import MainLayout from "./Layouts/MainLayout";

const ErrorPage = lazy(() => import("./pages/Error/Error"));
const HomePage = lazy(() => import("./pages/Home/Home"));

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
		],
	},
]);

export default router;
