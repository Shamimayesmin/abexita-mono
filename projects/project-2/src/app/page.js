import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import FreeTrial from "@/components/FreeTrial";
import FrequentQuestion from "@/components/FrequentQuestion";
import Features from "@/components/Reuseable/Features";
import Image from "next/image";

export default function Home() {
  return (
  <div>
    <Banner/>
    <FreeTrial/>
    <Features/>
    <FrequentQuestion/>
    <Footer/>
   {/* <div className="w-[1078px] mx-auto">
    
    </div> */}
  </div>
  );
}
