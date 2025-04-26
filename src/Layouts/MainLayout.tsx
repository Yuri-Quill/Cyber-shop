import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Components/Loader/Loader";
import Header from "@/Components/Header/Header";

const MainLayout = () => {
	return (
		<div className="wrapper">
			<Header/>
			<main className="main">
				<Suspense fallback={<Loader fullscreen={true} />}>
					<Outlet />
				</Suspense>
			</main>
			<footer className="footer">footer</footer>
		</div>
	);
};

export default MainLayout;
