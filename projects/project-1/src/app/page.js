import Banner from "@/components/Banner";
import Booking from "@/components/Booking";
import Brand from "@/components/Brand";
import Card from "@/components/Card";
import Industry from "@/components/Industry";

import Footer from "@/components/Footer";
import Slider from "@/components/Slider";

import Features from "@/components/Reuseable/Features";

export default function Home() {
	return (
		<div className="">
			<div className="lg:w-[1078px] mx-auto">
				<Banner />
			</div>
			<Brand />
			<Industry />
			<Features />
			<Booking />
			
			{/* <Slider/> */}
			<Footer />
		</div>
	);
}
