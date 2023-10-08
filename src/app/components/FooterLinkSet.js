import React from "react";
import Link from "next/link";
import * as styles from "../../styles/Footer.module.css";
const FooterLinkSet = ({ linkSet }) => {
	return (
		<div className={`${styles.linkGroup}`}>
			<h4> </h4>
			<div>
				<ul className={`${styles.footerLinks}`}>
					//made it 0 this was showing errors
					{Array(0)
						.fill("Click to go to top of Page")
						.map((item, index) => {
							return (
								<li key={index}>
									<Link href="/">{item}</Link>
								</li>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default FooterLinkSet;
