import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./router";

import "./config/axios.config";

import "./helpers/reset.scss";

import "react-toastify/dist/ReactToastify.css";
import "./fonts/fonts.scss";
import "./index.scss";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
