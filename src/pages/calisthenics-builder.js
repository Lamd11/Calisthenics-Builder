import React from 'react'
import LandingContainer from '../components/landing-container';
import Navbar from "../components/navbar";


export default function CalisthenicsBuilder () {
    return (
        <main id="hero">
            <Navbar/>
            <LandingContainer
                image=""
                title="Calisthenics Builder"
                text="Defining Progression with Clarity"
                link="/progressions"
                isHero
            />
            <LandingContainer
                image=""
                title="Progressions"
                text="View the exercise progressions"
                link="/progressions"
            />
            <LandingContainer
                image=""
                title="Workout Plan"
                text="Organize and create your workout plan"
                link="/workout-plan"
            />
            <LandingContainer
                image=""
                title="Resources"
                text="Access essential and broad information"
                link="/resources"
            />
        </main>
    )
}