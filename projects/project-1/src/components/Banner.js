"use client";
import SectionTitle from "../../../../projects/shared/components/Reuseable/SectionTitle";
import Image from "next/image";
import banImage from "../../../../projects/project-1/public/assets/Frame 1000002406.png";
import icon from "../../../../projects/project-1/public/assets/Sucess.png";
import mainImage from "../../../../projects/project-1/public/assets/Main image.png";
const Banner = () => {
	return (
		<div
			className="mt-28 bg-cover bg-center"
			// style={{
			// 	backgroundImage: "url('/assets/Background line.svg')",
			// 	backgroundSize: "cover",
			// 	backgroundPosition: "center",
			// 	height: "400px",
			// 	width: "100%",
			// }}
		>
			{/* <SectionTitle
				heading={
					<>
						Looking for a{" "}
						<span className="text-red-500">business solution for</span>{" "}
						appointments?
					</>
				}
			/> */}

			{/* <div>
				<h2 className="text-base text-[#667085] mt-5">
					Ambel simplifies management by providing tools for scheduling{" "}
					appointments, managing bookkeeping, accepting payments, sharing
					resources with customers, sending reminders, and running email
					marketing campaigns.
				</h2>
				<div className="flex justify-center items-center">
					<button className="mr-4 bg-[#19525A]">Start A Free Trial</button>
					<button>button2</button>
				</div>
			</div> */}
			<div
				className="bg-cover bg-center"
				style={{
					backgroundImage: "url('/assets/Background line.svg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
					height: "400px",
					width: "100%",
				}}
			>
				<Image src={banImage} alt="" />

				<div className="flex justify-center items-center mt-10 gap-8">
					<button className="bg-[#ECFDF3] text-[#027A48] text-[12px] font-medium px-2 py-1 rounded-lg inline-flex items-center gap-2">
						<Image src={icon} alt="" />
						No credit card required
					</button>
					<button className="bg-[#ECFDF3] text-[#027A48] text-[12px] font-medium px-2 py-1 rounded-lg inline-flex items-center gap-2">
						<Image src={icon} alt="" />
						Try one month for free
					</button>
				</div>
			</div>
			<div className="my-10">
				<Image src={mainImage} alt="" />
			</div>
		</div>
	);
};

export default Banner;
