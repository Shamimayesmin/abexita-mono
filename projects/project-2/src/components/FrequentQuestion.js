import React from "react";
import SectionTitle from "./Reuseable/SectionTitle";
import Image from "next/image";
// import SectionTitle from '../../../shared/components/Reuseable/SectionTitle';
import img from "../../public/assets/Image.png";
import icon1 from "../../public/assets/featureIcon/Featured icon (2).png";
import icon2 from "../../public/assets/featureIcon/Featured icon (3).png";
import icon3 from "../../public/assets/featureIcon/Featured icon (4).png";
import icon4 from "../../public/assets/featureIcon/Featured icon (5).png";
import icon5 from "../../public/assets/featureIcon/Featured icon (7).png";
import icon6 from "../../public/assets/featureIcon/Featured icon (8).png";
const FrequentQuestion = () => {
	const data = [
		{
			id: 1,
			title: "Is there a free trial available?",
			image1: icon1,

			description:
				"Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
		},
		{
			id: 2,
			title: "Can I change my plan later?",
			image1: icon2,

			description:
				"Of course, you can change your plan anytime you want. You can also upgrade or downgrade your plan. ",
		},
		{
			id: 3,
			title:
				"May I need to pay full amount while I update plan in the middle of the month?",
			image1: icon3,

			description:
				"No you don’t need to pay the full amount if you update the practitioner number. Just pay for available days from the next renew.  ",
		},
		{
			id: 4,
			title: "Can I disable the auto renew?",
			image1: icon4,

			description:
				"You can disable and enable auto renew anytime also you can choose auto renew from different options.",
		},
		{
			id: 5,
			title: "What is your cancellation policy?",
			image1: icon5,

			description:
				"We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid. ",
		},
		{
			id: 6,
			title: "Can I run my business Pay As You Go for lifetime",
			image1: icon6,

			description:
				"Yes, you can run your business lifetime with Pay As You Go. No additional charges will taken for your plan. ",
		},
	];
	return (
		<div className="w-[1280px] mx-auto mb-10">
			<div className="w-1/2 p-8">
				<h5 className="text-[#19525A] text-start text-sm font-bold">Support</h5>
				<h2 className="text-[#101828] text-[36px] font-bold">
					Frequently asked questions
				</h2>
				<p className="text-[#475467]">
					Everything you need to know about the product and billing. Can’t find
					the answer you’re looking for? Please chat to our friendly team.
				</p>
			</div>
			<div className="flex gap-10">
				<div className="w-1/2 grid grid-cols-1 gap-2">
					{data?.map((item, index) => {
						return (
							<div key={index} className="flex gap-2 px-8">
								<div>
									<Image
										className=""
										height={50}
										width={50}
										src={item?.image1}
										alt=""
									/>
								</div>
								<div>
									<h5 className="text-[#101828] text-[18px] font-semibold">
										{item?.title}
									</h5>
									<p className="text-sm text-[#475467] font-normal">
										{item?.description}
									</p>
								</div>
							</div>
						);
					})}
				</div>

				<div className="w-1/2 py-28">
					<Image className="" height={460} width={560} src={img} alt="" />
				</div>
			</div>
		</div>
	);
};

export default FrequentQuestion;
