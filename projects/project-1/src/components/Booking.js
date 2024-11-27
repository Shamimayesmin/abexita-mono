import React from "react";

const Booking = () => {
	return (
		<div className="w-[1260px] mx-auto items-center shadow-lg rounded-2xl drop-shadow-lg mb-10">
			<div className="px-20 py-8">
				<h3 className="text-[#344054] text-[36px] font-semibold px-20 text-center">
					Find and Book Appointments with Local <br /> and International
					Professionals
				</h3>
				<div className="flex gap-3 justify-center mt-10">
					<input
						type="text"
						placeholder="Search Doctor, Therapist, Consultant, Spa"
						className="border border-gray-500 text-sm w-[400px] p-2 rounded-full"
					/>
					<input
						type="text"
						placeholder="Search your location"
						className="border  text-sm w-[400px] p-2 rounded-full border-gray-500"
					/>
					<button className="btn bg-sky-500 text-white font-medium px-3 py-1 rounded-full text-sm">
						Search
					</button>
				</div>
				<div className="mt-10 pl-28"> 
					<p className="mb-5">Are you looking for</p>
                    <div className="flex gap-3">
                    <button className="bg-[#F2F4F7] px-4 py-1 rounded-full text-sm">Doctor</button>
                    <button className="bg-[#F2F4F7] px-2 py-1 rounded-full">Lawyer </button>
                    <button className="bg-[#F2F4F7] px-2 py-1 rounded-full text-sm">Therapist </button>
                    <button className="bg-[#F2F4F7] px-4 py-1 rounded-full text-sm">Spa </button>
                    <button className="bg-[#F2F4F7] px-3 py-1 rounded-full text-sm">Barber </button>
                    <button className="bg-[#F2F4F7] px-3 py-1 rounded-full text-sm">Med spa </button>
                    <button className="bg-[#F2F4F7] text-sky-400 px-2 py-1 rounded-full text-sm">Psychiartist </button>
                    <button className="bg-[#F2F4F7] px-2 py-1 rounded-full text-sm">Consultancy firm </button>
                    <button className="bg-[#dff1f9] px-2 py-1 rounded-full text-sky-400 text-sm">More</button>
                    </div>
                    <p className="text-center text-sm text-sky-400 mt-10">Explore More ...</p>
				</div>
			</div>
		</div>
	);
};

export default Booking;
