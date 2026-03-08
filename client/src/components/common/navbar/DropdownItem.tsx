import styles from "./dropdown.module.scss";

import { Link } from "react-router-dom";
import { navLinks } from "../../../assets/data/navlinks";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { useEffect, useRef, useState } from "react";

const DropdownItem = () => {
	const [openCategory, setOpenCategory] = useState<null | string>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(e.target as Node)
			) {
				setOpenCategory(null);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleOpenCategory = (title: string) => {
		setOpenCategory((prev) => (title === prev ? null : title));
	};

	return (
		<section className={styles.dropdown} ref={dropdownRef}>
			{navLinks.map((item) => {
				return (
					<article className={styles["dropdown__menu"]} key={item.id}>
						<span
							className={styles["dropdown__menu--title"]}
							role="button"
							tabIndex={0}
							aria-expanded={openCategory === item.title}
							aria-haspopup="true"
							onKeyDown={(e) =>
								e.key === "Enter" && handleOpenCategory(item.title)
							}
							onClick={() => handleOpenCategory(item.title)}
						>
							{item.title}
							{openCategory === item.title ? (
								<MdKeyboardArrowUp />
							) : (
								<MdKeyboardArrowDown />
							)}
						</span>
						{openCategory === item.title && (
							<ul className={styles["dropdown__menu--list"]}>
								{item.links.map((link) => {
									return (
										<li key={link.label}>
											<Link
												to={link.path}
												className={styles["dropdown__menu--link"]}
												onClick={() => setOpenCategory(null)}
											>
												{link.label}
											</Link>
										</li>
									);
								})}
							</ul>
						)}
					</article>
				);
			})}
		</section>
	);
};

export default DropdownItem;
