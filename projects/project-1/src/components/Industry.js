import React from "react";
import SectionTitle from "../../../../projects/shared/components/Reuseable/SectionTitle";
import Image from "next/image";
import doctor from "../../public/assets/doctor/Rectangle 4931.png"
import img1 from "../../public/assets/doctor/Rectangle 4926.png"
import img2 from "../../public/assets/doctor/Rectangle 4928.png"
import img3 from "../../public/assets/doctor/Rectangle 4930.png"

import img4 from "../../public/assets/doctor/Rectangle 4933.png"
import img5 from "../../public/assets/doctor/teacher-brunette-instructor-with-computer-suit-whiteboard-classroom-crossing-hands 1.png"
import img6 from "../../public/assets/doctor/portrait-studio-shot-thai-professional-female-massaging-masseuse-uniform-stand-smiling-look-camera-hold-massage-cosmetic-perfume-oil-towel-orchid-flower-wood-tray-brick-background_102814-7845 1.png"

const Industry = () => {
	return (
		<>
			<div className="w-[996px] mx-auto px-14 pb-10">
				<SectionTitle
					subHeading={"Industries"}
					heading={
                        <div>
                        Popular Businesses and Practitioners <br /> who use Ambel
                        </div>
                    }
				/>
				<p className="text-[#667085] text-lg  text-justify mt-5 font-normal">
					Our platform supports a diverse range of professionals, with popular
					industries; including: healthcare providers, medi spas, salons ,
					fitness coaches, law agencies, beauty specialists, consultants, and
					therapists.{" "}
				</p>
			</div>

            <div className="grid grid-cols-7 w-[907px] mx-auto border-2 rounded-full items-center gap-10">
                <p className="bg-[#19525A] text-center text-white rounded-full text-base p-1">Doctor</p>
                <p>Lawyer</p>
                <p>Spa & salon</p>
                <p>Therapist</p>
                <p>Fitness</p>
                <p>Instructor</p>
                <p>Consultancy</p>
            </div>

            <div className="px-16 mt-14 flex gap-5 justify-evenly">
                <div className="w-[524px] flex bg-[#19525A] rounded-2xl gap-4 p-5">
                    <div> 
                        <p className="bg-white w-16 text-center rounded-full mb-3 font-semibold">Doctor</p>
                        <h3 className="text-[24px] text-[#FFFFFF] font-semibold leading-7">Business solution for healthcare providers</h3>
                        <p className="text-sm text-[#FFFFFF] mt-3">Our software allows Doctors and Medical Professionals to book appointment, manage their patients, provide online prescriptions, overview of their med charts and automatically send reminders for treatments.</p>

                    </div>
                    <Image src={doctor} alt="" />

                </div>
                <div className="w-[784px] flex gap-5 justify-evenly">
                <Image src={img1} alt="" />
                <Image src={img2} alt="" />
                <Image src={img3} alt="" />
                <Image src={img4} alt="" />
                <Image src={img5} alt="" />
                <Image src={img6} alt="" />
                </div>

            </div>
		</>
	);
};

export default Industry;
