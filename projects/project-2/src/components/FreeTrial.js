import React from "react";

const FreeTrial = () => {
	return (
		<div className="mt-96 px-20 py-10">
			<div className="flex gap-5 bg-[#F5FFFD] px-20 py-20 rounded-lg ">
				<div className="px-20">
					<h3 className="text-[#19525A] text-[30px] font-semibold mt-">
						Start your 30-day free trial
					</h3>
					<p className="text-[20px] font-normal text-[#19525A]">
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
