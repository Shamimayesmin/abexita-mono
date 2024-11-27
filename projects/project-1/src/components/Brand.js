import Image from 'next/image';
import logos from "../../../../projects/project-1/public/assets/Logos.png"

const Brand = () => {
    return (
        <div className='bg-[#FAFAFA] py-20 mb-20'>
            <h4 className='text-base font-medium text-center text-[#475467]'>Join 10k+ Users, 35+ Solo Practitioners and 60+ Businesses all over the World</h4>
            <div className='flex justify-center'>
            <Image src={logos} alt=""  className='mt-10'/>
            </div>
        </div>
    );
};

export default Brand;