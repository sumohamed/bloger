import styles from "./navbar.module.scss";

import darkBloger from "../../../assets/images/bloger-dark.png";

import Navigation from "./Navigation";
import DropdownItem from "./DropdownItem";
import AuthButtons from "./AuthButtons";
import Button from "../button/Button";
import { IoMdClose } from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import useBreakpoint from "../../../hooks/useBreakpoint";

const Navbar = () => {
	const isMobile = useBreakpoint(900);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

	const handleMobleNav = () => {
		setIsMenuOpen((prev) => !prev);
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
					ariaLabel={isMenuOpen ? "Close Menu" : "OpenMenu"}
				>
					{isMenuOpen ? <IoMdClose /> : <FiAlignJustify />}
					<span className="sr-only">
						{isMenuOpen ? "Close" : "Open"} navigation menu
					</span>
				</Button>
				<Navigation
					className={
						!isMobile
							? styles["desktop-nav"]
							: isMenuOpen
								? styles["mobile-nav"]
								: styles["desktop-nav"]
					}
				>
					<DropdownItem onClose={() => setIsMenuOpen(false)} />
					<AuthButtons onClose={() => setIsMenuOpen(false)} />
				</Navigation>
			</div>
		</header>
	);
};

export default Navbar;
