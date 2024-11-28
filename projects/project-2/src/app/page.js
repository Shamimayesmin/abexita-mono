"use client";

import React, { Suspense } from "react";

import FreeTrial from "../components/FreeTrial";
import FrequentQuestion from "../components/FrequentQuestion";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Features = React.lazy(() =>
	import("../../../project-1/src/components/Reuseable/Features")
);

export default function Home() {
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
}
