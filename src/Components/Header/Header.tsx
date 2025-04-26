import UserActions from "../UserActions/UserActions";
import "./Header.scss";
import Logo from "./Logo";
import Menu from "./Menu";
import { actionsData } from "@/data/actions.data";

const Header = () => {
	return (
		<header className="header">
			<Logo />
			<Menu />
			<UserActions data={actionsData} />
		</header>
	);
};

export default Header;
