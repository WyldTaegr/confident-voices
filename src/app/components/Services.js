import React from "react";
import SectionHeading from "./SectionHeading";
import * as styles from "../../styles/Services.module.css";
import ServiceCard from "./ServiceCard";
import images from "../../constants/images";
import Button from "./Button";
const Services = ({ services }) => {
	return (
		<section className={styles.container}>
			<div className="margin-on-side">
				{/* Section Heading */}
				<SectionHeading headingTitle="Our Services" />
				{/* Section Description */}
				<p className={`${styles.servicesDes} text-light-gray`}>
					We offer the best choices tailored for your child's speech development needs. 
					Ensure they receive guidance from our highly skilled speech therapists. 
					With Confident Voices, you can always consult to determine the right service to boost your child's 
					confidence and speech skills.
				</p>
				{/* Section List - we will map through array and render a card for each item */}
				<div className={`row ${styles.serviceList}`}>
					{services.map((item) => {
						return <ServiceCard service={item} key={item.id} />;
					})}
				</div>
				<div className="row center">
					<Button text="Learn More" />
				</div>
			</div>
		</section>
	);
};

export default Services;
