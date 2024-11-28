import React from "react";

const Booking = () => {
	return (
		<div className="lg:w-[1260px] w-full mx-auto items-center shadow-lg rounded-2xl drop-shadow-lg mb-14">
			<div className="lg:px-20 px-8 lg:py-8 py-6">
				<h3 className="text-[#344054] lg:text-[36px] text-lg font-semibold lg:px-20 px-10 text-center leading-9">
					Find and Book Appointments with Local <br /> and International
					Professionals
				</h3>
				<div className="flex lg:flex-row flex-col gap-3 justify-center mt-10">
					<input
						type="text"
						placeholder="Search Doctor, Therapist, Consultant, Spa"
						className="border border-gray-500 text-sm lg:w-[400px] w-full p-2 rounded-full"
					/>
					<input
						type="text"
						placeholder="Search your location"
						className="border  text-sm lg:w-[400px] w-full p-2 rounded-full border-gray-500"
					/>
					<button className="btn bg-sky-500 text-white font-medium lg:px-3 px-2 py-1 rounded-full text-sm">
						Search
					</button>
				</div>
				<div className="mt-10 lg:pl-28 pl-1">
					<p className="mb-5">Are you looking for</p>
					<div className=" grid lg:grid-cols-9 grid-cols-3 gap-3">
						<button className="bg-[#F2F4F7] px-4 lg:py-1 py-2 rounded-full text-sm">
							Doctor
						</button>
						<button className="bg-[#F2F4F7] px-2 lg:py-1 py-2rounded-full">
							Lawyer{" "}
						</button>
						<button className="bg-[#F2F4F7] px-2 lg:py-1 py-2rounded-full text-sm">
							Therapist{" "}
						</button>
						<button className="bg-[#F2F4F7] px-4 lg:py-1 py-2 rounded-full text-sm">
							Spa{" "}
						</button>
						<button className="bg-[#F2F4F7] px-3 lg:py-1 py-2 rounded-full text-sm">
							Barber{" "}
						</button>
						<button className="bg-[#F2F4F7] px-3 lg:py-1 py-2 rounded-full text-sm">
							Med spa{" "}
						</button>
						<button className="bg-[#F2F4F7] text-sky-400 px-2 lg:py-1 py-2 rounded-full text-sm">
							Psychiartist{" "}
						</button>
						<button className="bg-[#F2F4F7] lg:px-2 px-3 lg:py-1 py-2 rounded-full text-sm">
							Consultancy firm{" "}
						</button>
						<button className="bg-[#dff1f9] px-2 lg:py-1 py-2 rounded-full text-sky-400 text-sm">
							More
						</button>
					</div>
					<p className="text-center text-sm text-sky-400 mt-10">
						Explore More ...
					</p>
				</div>
			</div>
		</div>
	);
};

export default Booking;
