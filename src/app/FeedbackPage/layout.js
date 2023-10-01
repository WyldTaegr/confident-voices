import React from 'react';
//import Button from 'react-bootstrap/Button'
//import color and css styles
import "./color.css";

export default function FeedbackPageLayout({children}){
	return (
		
		<div>
			{children}
			<button>
				<p>
				This button literally does nothing
				</p>
			</button>
		</div>
	)

};