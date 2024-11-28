"use client";

import SectionTitle from "../../../../projects/shared/components/Reuseable/SectionTitle";
import Image from "next/image";
import banImage from "../../../../projects/project-1/public/assets/Frame 1000002406.png";
import icon from "../../../../projects/project-1/public/assets/Sucess.png";
import mainImage from "../../../../projects/project-1/public/assets/Main image.png";

const Banner = () => {
	return (
		<div className="lg:mt-28 mt-20">
			{/* Banner Section */}
			<div
				className="bg-cover bg-center lg:mt-8 mt-7"
				style={{
					backgroundImage: "url('/assets/Background line.svg')",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="mx-auto px-4 flex flex-col items-center gap-10 lg:mt-0 mt-0">
					{/* Left Image */}
					<div className="w-full">
						<Image
							className="w-full h-auto object-contain"
							src={banImage}
							alt="Banner Image"
							priority
						/>
					</div>

					{/* Call-to-Action Buttons */}
					<div className="w-full flex lg:flex-row flex-col items-center  gap-4 justify-center">
						<button className="bg-[#ECFDF3] text-[#027A48] text-xs md:text-sm font-medium px-4 py-2 rounded-lg inline-flex items-center gap-2 shadow-md">
							<Image src={icon} alt="Success Icon" width={16} height={16} />
							No credit card required
						</button>
						<button className="bg-[#ECFDF3] text-[#027A48] text-xs md:text-sm font-medium px-4 py-2 rounded-lg inline-flex items-center gap-2 shadow-md">
							<Image src={icon} alt="Success Icon" width={16} height={16} />
							Try one month for free
						</button>
					</div>
				</div>
			</div>

			{/* Main Image Section */}
			<div className="mt-10">
				<div className="container mx-auto px-4">
					<Image
						className="w-full h-auto object-contain"
						src={mainImage}
						alt="Main Image"
						priority
					/>
				</div>
			</div>
		</div>
	);
};

export default Banner;
