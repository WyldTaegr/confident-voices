'use client'
// pages/index.js
import Advantages from "@/components/Advantages";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import data from "@/constants/data";
import Head from "next/head";
import React from 'react';
import "@/styles/globals.css";
import Link from 'next/link';
import { Button } from '@aws-amplify/ui-react';

const HomePage = (props) => {
  return (
    <div>
      <Head>
				<title>Speechio - You health Partner</title>
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width"
				/>
				<link rel="shortcut icon" href="/public/favicon.ico" />
        </Head>
        {/* Hero Section */}
        <Hero />
        {/* Our Services Section */}
        <Services services={data.services} />
        {/* Advantages */}
        <Advantages />
        {/* To do - Carousel */}
        <Testimonials testimonoal={data.testimonial} />
        {/* Articles */}
        {/* <Articles articles={data.articles} /> */}
        {/* Footer */}
        <Footer />
    </div>
  );
};


export default HomePage;

