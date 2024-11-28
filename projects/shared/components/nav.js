"use client";

import Link from "next/link";
import Logo from "./Reuseable/Logo";
import { useState } from "react";
import '../app/globals.css'; 
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleOutsideClick = () => setIsOpen(false);

	return (
		<div>
			<nav className="bg-white shadow fixed top-0 left-0 w-full z-50">
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
								<li>
									<Link href="#" className="text-sm">
										Feature
									</Link>
									<ul className="menu bg-base-200 w-24 p-1">
										<li>
											<Link href="#" className="text-xs">
												Sub-1
											</Link>
										</li>
										<li>
											<Link href="#" className="text-xs">
												Sub-2
											</Link>
										</li>
									</ul>
								</li>
								<li>
									<Link href="#" className="text-sm">
										Pricing
									</Link>
								</li>
								<li>
									<Link href="#" className="text-sm">
										Resources
									</Link>
								</li>
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
							<li className="relative group">
								<Link href="#" className="group-hover:bg-base-200">
									Feature
								</Link>
								<ul className="hidden group-hover:block menu bg-gray-300 rounded-box w-24 p-2 absolute top-full">
									<li className="hover:text-sky-400">
										<Link href="#" className="text-sm">
											Feature-1
										</Link>
									</li>
									<li className="hover:text-sky-400 mt-1">
										<Link href="#" className="text-sm">
											Feature-2
										</Link>
									</li>
								</ul>
							</li>
							<li>
								<Link href="#">Pricing</Link>
							</li>
							<li>
								<Link href="#">Solutions</Link>
							</li>
							<li>
								<Link href="#">Resources</Link>
							</li>
							<li>
								<Link href="#">Help</Link>
							</li>
						</ul>
					</div>

					{/* Navbar End */}
					<div className="navbar-end">
						<Link
							href="#"
							className="btn lg:mr-3 mr-1 hover:bg-sky-300 lg:p-3 p-1 rounded-md hover:text-white lg:text-base text-xs"
						>
							Login
						</Link>
						<Link
							href="#"
							className="btn bg-[#0089C9] lg:p-3 p-1 text-white rounded-md lg:text-base text-xs"
						>
							Signup
						</Link>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
