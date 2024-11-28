"use client";
import SectionTitle from "../../../../projects/shared/components/Reuseable/SectionTitle";
import Image from "next/image";
import icon1 from "../../public/assets/symbol/Featured icon.png";
import icon2 from "../../public/assets/symbol/Featured icon (1).png";
import checkIcon from "../../public/assets/symbol/Check icon.png";


const Banner = () => {
	const data = [
		{
			id: 1,
			title: "Pay As You Go",
			image1: icon1,
			checkIc: checkIcon,
			price: "10%",
			description: "10% from your customer payment",
			text1: "Only pre-paid booking",
			text2: "Both practitioner and Organization",
			text3: "Up to 5 practitioners in organization",
			text4: "2 staff members are allowed",
			text5: "Basic chat and email support",
		},
		{
			id: 2,
			title: "Practitioner",
			image1: icon2,
			checkIc: checkIcon,
			price: "49",
			description: "1 practitioner license/monthly",
			text1: "All booking options",
			text2: "All schedule Feature",
			text3: "Individual single practitioner license",
			text4: "3 staff members are allowed",
			text5: "Unlimited email marketing",
		},
		{
			id: 3,
			title: "Enterprise",
			image1: icon2,
			checkIc: checkIcon,
			price: "39",
			description: "Practitioner Number",
			text1: "All booking options",
			text2: "Only for Organization",
			text3: " Unlimited practitioners and staff",
			text4: "Customizable 6 page website",
			text5: "E-commerce functionality",
		},
	];
	return (
		<div className="lg:mb-10 mb-20 relative">
			<div className="bg-[#F5FFFA] lg:mt-16 mt-10 lg:p-20 p-14 lg:pb-52 pb-24">
				<SectionTitle
					subHeading={<span className="text-[#19525A]">Pricing plans</span>}
					heading={
						<span className="text-[#307D33] lg:text-[36px] text-lg">
							Let’s Get Started. <br /> We’ve got a Plan that’s perfect for you.{" "}
						</span>
					}
				/>
				<p className="text-[#0089C9] lg:text-lg text-sm text-center mt-6">
					Simple, transparent pricing that grows with you. Try any plan free for
					30 days.
				</p>

				<div className="items-center lg:w-[300px] w-full p-1 bg-[#ECECEC] mx-auto flex rounded-xl mt-7">
					<button className="bg-[#ECECEC] w-[150px] px-5 py-1 rounded-lg">
						Monthly
					</button>
					<button className="bg-white w-[150px] px-5 py-1 rounded-lg">
						Yearly
					</button>
				</div>
			</div>
			<div className="lg:w-[1280px] w-full mx-auto grid lg:grid-cols-3 grid-cols-1 absolute top-96 lg:mt-0 mt-5 inset-x-0 lg:px-0 px-2 gap-3">
				{data?.map((item, index) => {
					return (
						<div
							key={index}
							className="lg:w-[384px] w-full lg:h-[500px] h-full bg-[#FFFFFF] border-2 lg:p-4 rounded-lg p-2"
						>
							<Image
								className="mx-auto"
								height={50}
								width={50}
								src={item?.image1}
								alt=""
							/>
							<p className="text-[#19525A] text-[20px] font-semibold text-center">
								{item?.title}
							</p>
							<p className="text-center lg:text-[48px] text-3xl text-[#101828] font-semibold">
								{item?.price}
							</p>
							<p className="text-[#475467] text-center">{item?.description}</p>
							<div className="grid grid-cols-1 gap-4 my-10 mb-10 px-4">
								<div className="flex gap-2">
									<Image
										className=""
										height={20}
										width={20}
										src={item?.checkIc}
										alt=""
									/>
									<p className="text-sm font-normal text-[#475467]">
										{item?.text1}
									</p>
								</div>
								<div className="inline-flex gap-2">
									<Image
										className=""
										height={20}
										width={20}
										src={item?.checkIc}
										alt=""
									/>
									<p className="text-sm font-normal text-[#475467]">
										{item?.text2}
									</p>
								</div>
								<div className="inline-flex gap-2">
									<Image
										className=""
										height={20}
										width={20}
										src={item?.checkIc}
										alt=""
									/>
									<p className="text-sm font-normal text-[#475467]">
										{item?.text3}
									</p>
								</div>
								<div className="inline-flex gap-2">
									<Image
										className=""
										height={20}
										width={20}
										src={item?.checkIc}
										alt=""
									/>
									<p className="text-sm font-normal text-[#475467]">
										{item?.text4}
									</p>
								</div>
								<div className="inline-flex gap-2">
									<Image
										className=""
										height={20}
										width={20}
										src={item?.checkIc}
										alt=""
									/>
									<p className="text-sm font-normal text-[#475467]">
										{item?.text5}
									</p>
								</div>
							</div>

							<div>
								<button className="w-full px-2 bg-[#19525A] rounded-md p-2 text-white">
									Get started
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Banner;
