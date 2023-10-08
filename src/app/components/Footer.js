import React from "react";
import * as styles from "../../styles/Footer.module.css";
import FooterLinkSet from "./FooterLinkSet";
const Footer = () => {
	return (
		<footer className={styles.footerContainer}>
			<div className={`margin-on-side ${styles.footerItemsRow}`}>
				{/* Company Info */}
				<div className={`${styles.companyInfo}`}>
					<div className={styles.branding}>
						{/* logo */}
						<div className={styles.logoFooter}>CoV</div>
						{/* Name */}
						<h3>Confident Voices</h3>
					</div>
					{/* description */}
					<p className={`${styles.companyDes}`}>
					Confident Voices offers an engaging and innovative web application, making speech 
					therapy fun and accessible for all children, helping them overcome speech 
					challenges and boosting their confidence for a brighter future.
					</p>
					<p>©Confident Voices -CSDS 395 2023. All rights reserved</p>
				</div>
				{/* Link Set 1 */}
				<FooterLinkSet />
				{/* Link Set 2 */}
				<FooterLinkSet />
				{/* Link Set 3 */}
				<FooterLinkSet />
			</div>
		</footer>
	);
};

export default Footer;
