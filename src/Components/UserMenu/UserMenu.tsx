import cn from "@/utils/cn";
import { HiOutlineUser } from "react-icons/hi2";

interface IUserMenuProps {
	className?: string;
}

const UserMenu = ({ className }: IUserMenuProps) => {
	return (
		<button className={cn("user-menu__btn", className)}>
			<HiOutlineUser className="user-menu__image" />
		</button>
	);
};

export default UserMenu;
