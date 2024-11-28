"use client";

import React, { Suspense } from "react";

const HomePage = React.lazy(() =>
	import("../../../../project-2/src/components/Reuseable/HomePage")
);
export default function Pricing() {
	return (
		<Suspense fallback={<div>Loading Project 2...</div>}>
			<HomePage />
		</Suspense>
	);
}
