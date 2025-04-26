import { Link } from "react-router-dom";
import LogoImage from "@/assets/cyber-logo.png";
import cn from "@/utils/cn";

interface ILogoProps {
	className?: string;
}

const Logo = ({ className }: ILogoProps) => {
	return (
		<Link className={cn("logo", className)} to="/" aria-label="Home page link">
			<img className="logo__image" src={LogoImage} alt="Cyber shop logo" title="Cyber shop logo" width={29} height={29} />
		</Link>
	);
};

export default Logo;
