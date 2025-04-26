import { CgProfile, CgShoppingCart } from "react-icons/cg";

import { IActionsData } from "@/types/actions.types";

export const actionsData: IActionsData[] = [
	{
		id: 1,
		name: "Favorites",
		image: <CgProfile />,
		description: "View your favorite products",
		link: "/favorites",
		ariaLabel: "Go to favorites page",
	},
	{
		id: 2,
		name: "Cart",
		image: <CgShoppingCart />,
		description: "View your cart",
		link: "/cart",
		ariaLabel: "Go to cart page",
	},
];
