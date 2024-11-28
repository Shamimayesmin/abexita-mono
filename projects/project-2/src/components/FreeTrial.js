import React from "react";

const FreeTrial = () => {
	return (
		<div className="lg:mt-96 mt-20 lg:px-20 px-10 lg:py-10 py-6">
			<div className="flex lg:flex-row flex-col gap-5 bg-[#F5FFFD] lg:px-20 px-10  lg:py-20 py-14 rounded-lg ">
				<div className="px-20">
					<h3 className="text-[#19525A] lg:text-[30px] text-2xl font-semibold mt-2">
						Start your 30-day free trial
					</h3>
					<p className="lg:text-[20px] text-xl font-normal text-[#19525A]">
						Join over 100+ practitioner and organization already growing with
						Ambel
					</p>
				</div>
				<div className="flex gap-2">
					<button className="px-8 h-11 border-2 rounded-lg">Learn more</button>
					<button className="px-8 h-11 border-2 rounded-lg bg-[#19525A] text-white">
						Get started
					</button>
				</div>
			</div>
		</div>
	);
};

export default FreeTrial;
