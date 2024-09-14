import React from 'react';
import LandingContainer from '../components/landing-container';
import Navbar from "../components/navbar";
import Footer from '../components/footer';

// Reference images from the public/images directory
const image1 = process.env.PUBLIC_URL + '/images/man-working-out-with-weights-portrait.jpg';
const image2 = process.env.PUBLIC_URL + '/images/strong-calisthenics-athlete-is-doing-a-straddle-planche-on-gornation-parallettes.jpg';
const image3 = process.env.PUBLIC_URL + '/images/flat-lay-minimalist-notebook-with-pen.jpg';
const image4 = process.env.PUBLIC_URL + '/images/meditate.jpg';

export default function CalisthenicsBuilder() {
    return (
        <main id="hero">
            <Navbar/>
            <LandingContainer
                image={image1}
                title="Calisthenics Builder"
                text="Defining Progression with Clarity"
                link="/progressions"
                isHero
            />
            <LandingContainer
                image={image2}
                title="Progressions"
                text="View the exercise progressions"
                link="/progressions"
                isIdentImage
            />
            <LandingContainer
                image={image3}
                title="Resources"
                text="Access essential and broad information"
                link="/resources"
            />
            <LandingContainer
                image={image4}
                title="News"
                text="The latest articles for exercise"
                link="/news"
            />
            <Footer/>
        </main>
    );
}
