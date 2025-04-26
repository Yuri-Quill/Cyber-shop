import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Components/Loader/Loader";

const MainLayout = () => {
	return (
		<div className="wrapper">
			<header className="header">header</header>
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
