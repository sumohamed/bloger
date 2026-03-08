import { Link } from "react-router-dom";
import styles from "./hero.module.scss";
import HeroImage from "../../../assets/images/hero.svg";

const Hero = () => {
	return (
		<section className={styles.hero}>
			<article className={styles["hero__box"]}>
				<div className={styles["hero__image"]}>
					<img
						src={HeroImage}
						alt="bloger"
						className={styles["hero__image--img"]}
					/>
				</div>
				<div className={styles["hero__content"]}>
					<h1 className={styles["hero__content--title"]}>
						Write. Publish. Grow.
					</h1>
					<p className={styles["hero__content--desc"]}>
						Blogr is the all-in-one platform for creators who want to
						share their story, grow their audience, and monetize their
						passion.
					</p>
					<div className={styles["hero__content--user-actions"]}>
						<Link
							className="btn-primary"
							data-type="primary"
							to="/register"
						>
							Start for Free
						</Link>
						<Link
							className="btn-primary"
							data-type="secondary"
							to="/about"
						>
							Learn More
						</Link>
					</div>
				</div>
			</article>
		</section>
	);
};

export default Hero;
