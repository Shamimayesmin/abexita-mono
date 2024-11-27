import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
	return (
		<>
			<div>
				<h3 className="text-center text-[#DC6803] tracking-wide text-base font-semibold">
					{subHeading}
				</h3>
				<h1 className="text-center mt-5 text-lg md:text-[36px] font-semibold text-[#040432] leading-tight">
					{heading}
				</h1>
				
			</div>
		</>
	);
};

export default SectionTitle;
