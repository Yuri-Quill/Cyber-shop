import Actions from "./Actions";
import "./Header.scss";
import Logo from "./Logo";
import Menu from "./Menu";

const Header = () => {
	return (
		<header className="header">
			<Logo />
			<Menu />
			<Actions />
		</header>
	);
};

export default Header;
