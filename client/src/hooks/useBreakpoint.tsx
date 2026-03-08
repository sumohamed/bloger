import { useEffect, useState } from "react";

const useBreakpoint = (breakpoint: number = 900) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

	useEffect(() => {
		let timeout: ReturnType<typeof setTimeout>;

		const handleResize = () => {
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				setIsMobile(window.innerWidth <= breakpoint);
			}, 100);
		};
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [breakpoint]);

	return isMobile;
};

export default useBreakpoint;
