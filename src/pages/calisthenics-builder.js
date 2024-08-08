import React from 'react'
import LandingContainer from '../components/landing-container';
import Navbar from "../components/navbar";
import Footer from '../components/footer';
import image1 from "../images/man-working-out-with-weights-portrait.jpg";
import image2 from "../images/strong-calisthenics-athlete-is-doing-a-straddle-planche-on-gornation-parallettes.jpg";
import image3 from "../images/flat-lay-minimalist-notebook-with-pen.jpg";
import image4 from "../images/meditate.jpg";



export default function CalisthenicsBuilder () {
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
                title="Workout Plan"
                text="Organize and create your workout plan"
                link="/workout-plan"
            />
            <LandingContainer
                image={image4}
                title="Resources"
                text="Access essential and broad information"
                link="/resources"
            />
            <Footer/>
        </main>
    )
}