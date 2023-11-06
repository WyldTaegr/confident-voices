import React from "react";
import Image from "next/image";
import * as styles from "@/styles/Hero.module.css";
import images from "@/constants/images";
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
					Unlocking the Power of Confident Speech for Every Child
				</h1>
				{/* details */}
				<p className={`${styles.heroDes} text-light-gray`}>
					Join us in revolutionizing speech therapy for children and ensuring a 
					brighter future for every young learner.
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
