/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useState, useRef, useEffect } from "react";
import "../app/style.css";
import Image from "next/image";
import img1 from "../../public/assets/cards/Group 1000003823.png";

const Slider = () => {
	const data = [
		{
			id: 1,
			name: "Schedule & Booking",
			image: img1,
			description:
				"Create, schedule and send your clients to your Ambel booking page, where they can book on any device.",
		},
		{
			id: 2,
			name: "Live consultant",
			image: img1,
			description:
				"Integrate meet, zoom and loom to communicate with your customers or clients via video conference.",
		},
		{
			id: 3,
			name: "Payments",
			image: img1,
			description:
				"Send custom invoices, take POS and cash payments, and accept credit or debit card payments from anywhere.",
		},
		{
			id: 4,
			name: "Customer tracking",
			image: img1,
			description:
				"Manage customers, send marketing emails, create records, and track via notes and case studies.",
		},
		{
			id: 5,
			name: "Notifications",
			image: img1,
			description:
				"Automatically notify your clients and practitioners with reminders via SMS and email with a single setup.",
		},
		{
			id: 6,
			name: "Website builder",
			image: img1,
			description:
				"Get a free website, design and customize your booking website for your business without any code.",
		},
		{
			id: 7,
			name: "Reports",
			image: img1,
			description:
				"Powerful data and graphs at your fingertips to monitor day-to-day activities and generate reports.",
		},
		{
			id: 8,
			name: "Resources",
			image: img1,
			description:
				"Create and share resources like prescriptions, documentation, medical charts, and videos.",
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);
	const slideRefs = useRef([]);
	const totalSlides = data.length;
	let isScrolling = useRef(false); // Debounce state

	// Scroll Handler
	const handleScroll = (e) => {
		if (isScrolling.current) return;
		isScrolling.current = true;

		if (e.deltaY > 0) {
			setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
		} else {
			setCurrentSlide((prev) => Math.max(prev - 1, 0));
		}

		// Reset debounce after 300ms
		setTimeout(() => {
			isScrolling.current = false;
		}, 300);
	};

	const handlePaginationClick = (index) => {
		setCurrentSlide(index);
	};

	const handleArrowClick = (direction) => {
		setCurrentSlide((prev) =>
			direction === "up"
				? Math.max(prev - 1, 0)
				: Math.min(prev + 1, totalSlides - 1)
		);
	};

	// Scroll event listener
	useEffect(() => {
		window.addEventListener("wheel", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("wheel", handleScroll);
		};
	}, []);

	// Smooth scroll to the current slide
	useEffect(() => {
		if (slideRefs.current[currentSlide]) {
			slideRefs.current[currentSlide].scrollIntoView({ behavior: "smooth" });
		}
	}, [currentSlide]);

	return (
		<div className="slider-container bg-gray-300">
			{/* Slider Items */}
			{data.map((item, index) => (
				<div
					key={item.id}
					ref={(el) => (slideRefs.current[index] = el)}
					className={`slide ${currentSlide === index ? "active" : ""}`}
				>
					<div className="text-center">
						<Image
							src={item?.image}
							alt={item?.name}
							className="mx-auto mb-4 w-96 h-96"
						/>
						<h2 className="text-2xl font-bold mb-2">{item?.name}</h2>
						<p className="text-gray-600">{item?.description}</p>
					</div>
				</div>
			))}

			{/* Pagination */}
			<div className="pagination">
				{data?.map((_, index) => (
					<button
						key={index}
						onClick={() => handlePaginationClick(index)}
						className={`pagination-dot ${
							currentSlide === index ? "active" : ""
						}`}
					/>
				))}
			</div>

			{/* Navigation Arrows */}
			<div className="navigation-arrows">
				<button className="bg-red-500" onClick={() => handleArrowClick("up")}>&#x25B2;</button>
				<button className="bg-orange-600" onClick={() => handleArrowClick("down")}>&#x25BC;</button>
			</div>
		</div>
	);
};

export default Slider;
