import { IMenuData } from "@/types/menu.types";

export const menuData: IMenuData[] = [
	{
		id: 1,
		name: "Home",
		description: "Welcome to our website",
		link: "/",
		ariaLabel: "Go to home page",
	},
	{
		id: 2,
		name: "About",
		description: "Learn more about our company",
		link: "/about",
		ariaLabel: "Go to about page",
	},
	{
		id: 3,
		name: "Contact Us",
		description: "Get in touch with us",
		link: "/contact",
		ariaLabel: "Go to contact page",
	},
	{
		id: 4,
		name: "Blog",
		description: "Read our latest articles",
		link: "/blog",
		ariaLabel: "Go to blog page",
	},
];
