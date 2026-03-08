import styles from "./navbar.module.scss";

import darkBloger from "../../../assets/images/bloger-dark.png";

import Navigation from "./Navigation";
import DropdownItem from "./DropdownItem";
import AuthButtons from "./AuthButtons";
import Button from "../button/Button";
import { IoMdClose } from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useBreakpoint from "../../../hooks/useBreakpoint";

const Navbar = () => {
	const isMobile = useBreakpoint(900);

	const [isMobileNav, setIsMobileNav] = useState<boolean>(false);

	useEffect(() => {
		const toggle = () => {
			if (!isMobile) setIsMobileNav(false);
		};

		return toggle;
	}, [isMobile]);

	const handleMobleNav = () => {
		setIsMobileNav((prev) => !prev);
	};

	return (
		<header className={styles.header}>
			<div className={`container | ${styles.navigation}`}>
				<Link to="/" aria-label="Bloger - Go to Home Page">
					<img src={darkBloger} alt="bloger" className={styles.logo} />
				</Link>
				<Button
					className={styles["burger-icon"]}
					action={handleMobleNav}
					ariaLabel={isMobileNav ? "Close Menu" : "OpenMenu"}
				>
					{isMobileNav ? <IoMdClose /> : <FiAlignJustify />}
					<span className="sr-only">
						{isMobileNav ? "Close" : "Open"} navigation menu
					</span>
				</Button>
				<Navigation
					className={`
    ${isMobileNav ? styles["mobile-nav"] : styles["desktop-nav"]}
  `}
				>
					<DropdownItem />
					<AuthButtons />
				</Navigation>
			</div>
		</header>
	);
};

export default Navbar;
