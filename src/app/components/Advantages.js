import React from "react";
import images from "./../../constants/images";
import * as styles from "./../../styles/Advantages.module.css";
import SingleAdvantage from "./SingleAdvantage";
const advantageData = [
	{
		title: "ConfidentVoices",
		image: images.leadingHealthProvider,
		description:
			"Confident Voices offers an engaging and innovative web application, making speech therapy fun and accessible for all children, helping them overcome speech challenges and boosting their confidence for a brighter future.",
		buttonText: "Learn More",
	},
	{
		title: "Download the Confident Voices mobile app",
		image: images.downloadApp,
		description:
			"Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely",
		buttonText: "Download",
	},
];

const Advantages = () => {
	return (
		<section className={`${styles.advContainer} margin-on-side`}>
			<SingleAdvantage data={advantageData[0]} />
			<SingleAdvantage data={advantageData[1]} direction="rev" />
		</section>
	);
};

export default Advantages;
