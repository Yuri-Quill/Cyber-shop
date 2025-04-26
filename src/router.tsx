import { createBrowserRouter } from "react-router-dom";

import MainLayout from "./Layouts/MainLayout";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/Error/Error";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <Home />,
			},
		],
	},
]);

export default router;
