import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
	return (
		<div className="wrapper">
			<header className="header">header</header>
			<main className="main">
				<Suspense fallback={<div>Loading</div>}>
					<Outlet />
				</Suspense>
			</main>
			<footer className="footer">footer</footer>
		</div>
	);
};

export default MainLayout;
