"use client";
import { useState, useRef } from "react";

const Card = () => {
	const data = [
		{
			id: 1,
			name: "Schedule & Booking",
			image1: "/assets/icons/Calender white Home.svg",
			image2: "/assets/icons/Link white.svg",
			description:
				"Create, schedule and send your clients to your Ambel booking page, where they can book on any device.",
		},
		{
			id: 2,
			name: "Live consultent",
			image1: "/assets/icons/Consultant white.svg",
			image2: "/assets/icons/Link white.svg",
			description:
				"Integrate meet, zoom and loom to   communicate with your customers or clients in via video conference.",
		},
		{
			id: 3,
			name: "Payments",
			image1: "/assets/icons/Payment white.svg",
			image2: "/assets/icons/Link white.svg",
			description: "",
			description:
				"Send custom invoices, take POS and cash payment also accept credit or debit card payment from anywhere.",
		},
		{
			id: 4,
			name: "Customenr taracking",
			image1: "/assets/icons/Targeting white.svg",
			image2: "/assets/icons/Link white.svg",
			description:
				"Manage customer, send marketing email and message, create, records and track via note, case study.",
		},
		{
			id: 5,
			name: "Notifications",
			image1: "/assets/icons/Notification white.svg",
			image2: "/assets/icons/Link white.svg",
			description:
				"Automatically notify your clients and practitioners with reminder vis SMS and email by single setup.",
		},
		{
			id: 6,
			name: "Website builder",
			image1: "/assets/icons/Website builder white.svg",
			image2: "/assets/icons/Link white.svg",
			description:
				"Get a free website, design and customize your booking website for your business without any code.",
		},
		{
			id: 7,
			name: "Reports",
			image1: "/assets/icons/Report white.svg",
			image2: "/assets/icons/Link white.svg",
			description:
				"Powerful data and graphs at your fingertips to monitor day to day activities and generate reports.",
		},
		{
			id: 8,
			name: "Resources",
			image1: "/assets/icons/Resources white.svg",
			image2: "/assets/icons/Link white.svg",
			description:
				"Create and share resources like Prescriptions, Documentations, Medical Charts and Videos.",
		},
	];

	const [hovered, setHovered] = useState(false);

	const handleHover = () => setHovered(true);
	const handleLeave = () => setHovered(false);

	// const handleHover = () => {
	// 	setHovered(true);
	// 	document.body.style.overflow = "hidden";  // Disable scrolling
	//   };
	  
	//   const handleLeave = () => {
	// 	setHovered(false);
	// 	document.body.style.overflow = "";  // Re-enable scrolling
	//   };
	  
	return (
		<div className="relative w-full h-screen flex justify-center items-center bg-gray-100">
      <div
        className="relative w-80 h-60 group"
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        {/* Card 1 */}
        <div
          className={`absolute w-full h-full bg-blue-100 transition-transform duration-1000 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <p className="p-4 text-lg font-semibold">Card 1</p>
        </div>

        {/* Card 2 */}
        <div
          className={`absolute w-full h-full bg-yellow-100 transition-transform duration-1000 delay-300 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <p className="p-4 text-lg font-semibold">Card 2</p>
        </div>

        {/* Card 3 */}
        <div
          className={`absolute w-full h-full bg-pink-100 transition-transform duration-1000 delay-600 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <p className="p-4 text-lg font-semibold">Card 3</p>
        </div>

        {/* Card 4 */}
        <div
          className={`absolute w-full h-full bg-green-100 transition-transform duration-1000 delay-900 ${
            hovered ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          <p className="p-4 text-lg font-semibold">Card 4</p>
        </div>
      </div>
    </div>
	);
};

export default Card;
