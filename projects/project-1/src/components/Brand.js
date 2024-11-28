import Image from "next/image";
import logos from "../../../../projects/project-1/public/assets/Logos.png";
// import img from "../../../../projects/shared/"
const Brand = () => {
	return (
		<div className="bg-[#FAFAFA] lg:py-20 py-10 lg:mb-20 mb-10">
			<h4 className="text-base font-medium text-center text-[#475467]">
				Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses all over the
				World
			</h4>
			<div className="flex justify-center">
				<Image src={logos} alt="" className="lg:mt-10 mt-5 lg:px-0 px-5" />
			</div>
		</div>
	);
};

export default Brand;
