import { Link } from "react-router-dom";

const Logo = () => {
	return (
		<Link className="header__logo" to="/" role="link" aria-label="Home page link">
			<img className="header__logo-img" src="" alt="Cyber shop logo" title="Cyber shop logo" />
		</Link>
	);
};

export default Logo;
