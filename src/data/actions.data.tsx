import { HiOutlineShoppingCart, HiOutlineHeart } from "react-icons/hi2";

import { IActionsData } from "@/types/actions.types";

export const actionsData: IActionsData[] = [
	{
		id: 1,
		name: "Favorites",
		image: HiOutlineHeart,
		description: "View your favorite products",
		link: "/favorites",
		ariaLabel: "Go to favorites page",
	},
	{
		id: 2,
		name: "Cart",
		image: HiOutlineShoppingCart,
		description: "View your cart",
		link: "/cart",
		ariaLabel: "Go to cart page",
	},
];
