import { memo } from "react";
import { Link } from "react-router-dom";
import { IActionsData } from "../../types/actions.types";
import cn from "@/utils/cn";
import UserMenu from "../UserMenu/UserMenu";

interface IUserActionsProps {
	data: IActionsData[];
	className?: string;
}

const UserActions = ({ data, className }: IUserActionsProps) => {
	return (
		<nav className={cn("user-actions", className)}>
			<ul className="user-actions__list">
				{data.map((item) => {
					const ItemImage = item.image;

					return (
						<li className="user-actions__item" key={item.id} aria-label={item.description}>
							<Link className="user-actions__link" to={item.link} aria-label={item.ariaLabel}>
								<ItemImage className="user-actions__image" />
							</Link>
						</li>
					);
				})}
				<li className="user-actions__item">
					<UserMenu />
				</li>
			</ul>
		</nav>
	);
};

export default memo(UserActions);
