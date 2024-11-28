import Image from "next/image";
import Link from "next/link";

import logo from "../../../public/assets/ambel copy 2 no pedding 1.png";

const Logo = () => {
	return (
		<div>
			<Link href="/">
				<Image
					className="lg:w-[150px] w-20"
					src={logo}
					alt="Solar-academy Logo"
					width={150}
					height={35}
					priority
				/>
			</Link>
		</div>
	);
};

export default Logo;
