import 'tailwindcss/tailwind.css';

import Image from "next/image";
import SectionTitle from "./SectionTitle";

const Features = () => {
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
	return (
		<div className="lg:my-16 my-10 bg-[#19525A] lg:p-20 p-14">
			<div className="lg:w-[1296px] w-full mx-auto">
				<SectionTitle
					subHeading={"Features"}
					heading={
						<span className="text-white lg:text-[36px] text-lg">
							Solve all your needs with a single software solution
						</span>
					}
				/>
				<p className="lg:text-[20px] text-base font-normal text-white lg:w-2/3 w-full lg:text-justify mx-auto lg:px-5 mt-5 px-3">
					This platform streamlines the entire customer management process,
					saving businesses time and increasing efficiency. Trusted by over 60+
					businesses.
				</p>

				<div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-10">
					{data?.map((item, index) => {
						// console.log("data",item);
						return (
							<div
								className="lg:w-[300px] w-full h-[220px] bg-[#25646C] p-7 rounded-xl hover:border-2 hover:shadow-lg hover:shadow-slate-50"
								key={index}
							>
								<div className="flex justify-between mb-3">
									<Image height={20} width={20} src={item?.image1} alt="" />
									<Image height={20} width={20} src={item?.image2} alt="" />
								</div>
								<h5 className="text-[20px] font-semibold text-white mb-3">
									{item?.name}
								</h5>
								<p className="text-sm font-normal text-white">
									{item?.description}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Features;
