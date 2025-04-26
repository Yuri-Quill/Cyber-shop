import { Link } from "react-router-dom";
import LogoImage from "@/assets/cyber-logo.png";

interface ILogoProps {
	className?: string;
}

const Logo = ({ className }: ILogoProps) => {
	return (
		<Link className={`header__logo ${className ? `logo--${className}` : ""}`} to="/" aria-label="Home page link">
			<img
				className={`header__logo-img ${className ? `logo-img--${className}` : ""}`}
				src={LogoImage}
				alt="Cyber shop logo"
				title="Cyber shop logo"
				width={29}
				height={29}
			/>
		</Link>
	);
};

export default Logo;
