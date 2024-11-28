import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata = {
	title: "Project 1",
	description: "Welcome to Project 1",
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
		{ label: "Pricing", href: "/pricing" },
		{ label: "Solutions", href: "#" },
		{ label: "Resources", href: "#" },
		{ label: "Help", href: "#" },
	];

	const authLinks = [
		{ label: "Login", href: "#", isPrimary: false },
		{ label: "Signup", href: "#", isPrimary: true },
	];

	return (
		<html lang="en">
			<body>
				{/* <Navbar/>  */}
				<Navbar menuItems={menuItems} authLinks={authLinks} />
				<main>{children}</main>
			</body>
		</html>
	);
}
