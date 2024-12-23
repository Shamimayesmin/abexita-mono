import 'tailwindcss/tailwind.css';

import "./globals.css";
import Navbar from "../components/Navbar";
// import Navbar from "../../../../projects/shared/components/Navbar";


export const metadata = {
	title: "Project 2",
	description: "Welcome to Project 2",
};

export default function RootLayout({ children }) {
	const menuItems = [
		{
			label: "Feature",
			href: "#",
			submenu: [
				{ label: "Feature-1", href: "#" },
				{ label: "Feature-2", href: "#" },
			],
		},
		{ label: "Pricing", href: "" },
		{ label: "Solutions", href: "#" },
		{ label: "Resources", href: "#" },
		{ label: "Help", href: "#" },
	];

	const authLinks = [
		{ label: "Login", href: "#", isPrimary: true },
		{ label: "Signup", href: "#", isPrimary: false },
	];
	return (
		<html lang="en">
			<body>
				
				<Navbar menuItems={menuItems} authLinks={authLinks} />
				<main>{children}</main>
			</body>
		</html>
	);
}
