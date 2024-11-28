import React from "react";

const Footer = () => {
	return (
		<div className="bg-[#19525A] text-white lg:px-36 px-10">
			<footer className=" p-6 lg:p-10">
				<div className="flex flex-col lg:flex-row lg:justify-between w-full">
					{/* <!-- Services Section --> */}
					<nav className="mb-6 lg:mb-0">
						<h6 className="font-semibold text-base mb-3">For Customers</h6>
						<ul className="tex-sm leading-8">
							<li>
								<a href="#" className="block hover:underline">
									Find a Practitioner
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Book an Appointment
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Make Payment
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Live Consultant
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Shop
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Resources
								</a>
							</li>
						</ul>
					</nav>

					{/* <!-- For Practitioners Section --> */}
					<nav className="mb-6 lg:mb-0">
						<h6 className="font-semibold text-base mb-3">For Practitioners</h6>
						<ul className="text-sm leading-8">
							<li>
								<a href="#" className="block hover:underline">
									Profile Setup
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Organization Setup
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Create Schedule
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Collaboration
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Pay Staff
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									QR Code
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Booking page
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Business tools
								</a>
							</li>
						</ul>
					</nav>

					{/* <!-- Resources --> */}
					<nav>
						<h6 className="font-semibold text-base mb-3">Resources</h6>
						<ul className="text-sm leading-8">
							<li>
								<a href="#" className="block hover:underline">
									Plans
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Blog
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Communitiy
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									FAQ
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Reviews
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Refund & Return
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Road map
								</a>
							</li>
						</ul>
					</nav>
					{/* <!-- CompanySection --> */}
					<nav>
						<h6 className="font-semibold text-base mb-3">Company</h6>
						<ul className="text-sm leading-8">
							<li>
								<a href="#" className="block hover:underline">
									About us
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Contact us
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Career
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Support center
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Affiliate Program
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Trust and Safety
								</a>
							</li>
						</ul>
					</nav>
				</div>
				{/* social icons */}
				<div className="flex items-center mb-4 lg:mb-0 gap-8">
					<p>Follow us</p>
					<nav>
						<ul className="flex gap-4">
							<li>
								<a href="#" aria-label="Twitter">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current text-white hover:text-blue-500"
									>
										<path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
									</svg>
								</a>
							</li>
							<li>
								<a href="#" aria-label="YouTube">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current text-white hover:text-red-500"
									>
										<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
									</svg>
								</a>
							</li>
							<li>
								<a href="#" aria-label="Facebook">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										className="fill-current text-white hover:text-blue-700"
									>
										<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
									</svg>
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
			<footer className=" border-t border-gray-300 px-6 py-4 lg:px-10 lg:py-6">
				<div className="flex flex-col lg:flex-row lg:justify-between items-center">
					<aside className="flex items-center mb-4 lg:mb-0">
						<p>Copyright © 2022. Ambel. All rights reserved.</p>
					</aside>

					{/* <!-- terms --> */}
					<nav>
						<ul className="flex gap-4">
							<li>
								<a href="#" className="block hover:underline">
									Privacy Policy
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Cookies
								</a>
							</li>
							<li>
								<a href="#" className="block hover:underline">
									Terms of Service
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
