import React from "react";
import Image from "next/image";
import * as styles from "../../styles/Hero.module.css";
import images from "../../constants/images";
import Button from "./Button";
import Link from "next/link";
const Hero = () => {
	return (
		<section className={`${styles.heroContainer} row margin-on-side`}>
			{/* dot dot pattern */}
			{/* left section */}
			<div className={`${styles.heroInfo}`}>
				{/* heading */}
				<h1 className={styles.heroHeading}>
					Virtual healthcare for you
				</h1>
				{/* details */}
				<p className={`${styles.heroDes} text-light-gray`}>
					bhjdbvfalgar provides progressive, and affordable
					healthcare, accessible on mobile and online for everyone
				</p>

				{/* Button - custom button */}
				<Link href="/LoginPage">
				<Button fill="fill" text={"Sign Up Today!"} />
				</Link>
			</div>

			{/* right section */}
			<div className={`${styles.heroImageContainer}`}>
				<Image src={images.heroImage} alt="Health is Wealth" />
			</div>
		</section>
	);
};

export default Hero;
