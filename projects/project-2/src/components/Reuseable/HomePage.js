"use client";

import React, { Suspense } from "react";
import Banner from "../Banner";
import FreeTrial from "../FreeTrial";
import FrequentQuestion from "../FrequentQuestion";
import Footer from "../Footer";

const Features = React.lazy(() =>
	import("../../../../project-1/src/components/Reuseable/Features")
);

const HomePage = () => {
	return (
		<div>
			<Banner />
			<FreeTrial />
			<Suspense fallback={<div>Loading Features...</div>}>
				<Features />
			</Suspense>
			<FrequentQuestion />
			<Footer />
		</div>
	);
};

export default HomePage;
