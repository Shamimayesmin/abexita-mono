"use client";


import Logo from "@/components/Reuseable/Logo";
import Link from "next/link";

import { useState } from "react";

const Navbar = ({ menuItems, authLinks }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-base-100 shadow fixed top-0 left-0 w-full z-50">
			<div className="container mx-auto flex items-center justify-between px-4 py-3">
				{/* Navbar Start */}
				<div className="flex items-center">
					{/* Mobile Dropdown Toggle */}
					<div className="relative lg:hidden">
						<button
							aria-label="Toggle menu"
							className="btn btn-ghost"
							onClick={() => setIsOpen(!isOpen)}
							aria-expanded={isOpen}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</button>
						<ul
							className={`dropdown-content menu absolute top-full left-0 bg-base-100 mt-1 w-36 p-2 shadow z-50 ${
								isOpen ? "block" : "hidden"
							}`}
						>
							{menuItems?.map((item, index) => (
								<li key={index}>
									<Link href={item.href} className="text-sm">
										{item.label}
									</Link>
									{item.submenu && (
										<ul className="menu bg-base-200 w-24 p-1">
											{item.submenu.map((subItem, subIndex) => (
												<li key={subIndex}>
													<Link href={subItem.href} className="text-xs">
														{subItem.label}
													</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
						</ul>
					</div>
					{/* Logo */}
					<div>
						<Link href="/" className="btn btn-ghost lg:text-xl text-sm">
							<Logo />
						</Link>
					</div>
				</div>

				{/* Navbar Center for Larger Screens */}
				<div className="hidden lg:flex">
					<ul className="menu flex px-1 space-x-4">
						{menuItems?.map((item, index) => (
							<li key={index} className="relative group">
								<Link href={item.href} className="group-hover:bg-base-200">
									{item.label}
								</Link>
								{item.submenu && (
									<ul className="hidden group-hover:block menu bg-gray-300 rounded-box w-24 p-2 absolute top-full">
										{item.submenu.map((subItem, subIndex) => (
											<li key={subIndex} className="hover:text-sky-400">
												<Link href={subItem.href} className="text-sm">
													{subItem.label}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>

				{/* Navbar End */}
				<div className="navbar-end">
					{authLinks?.map((link, index) => (
						<Link
							key={index}
							href={link.href}
							className={`btn ${
								link.isPrimary ? "bg-[#0089C9]" : "hover:bg-sky-300"
							} lg:p-3 p-1 rounded-md ${
								link.isPrimary ? "text-white" : "hover:text-white"
							} lg:text-base text-xs`}
						>
							{link.label}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
