import React from 'react';
//import Button from 'react-bootstrap/Button'
//import color and css styles
import "./color.css";
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

export default function FeedbackPageLayout({ children }) {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col justify-center items-center">
      {children}
    </div>
  );
};
