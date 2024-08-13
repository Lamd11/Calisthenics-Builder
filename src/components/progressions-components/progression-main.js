import React, { useState, useEffect } from "react";
import SkillCard from "./skill-card";
import SkillPopup from "./skill-popup";

const ProgressionMain = () => {
    const [skills, setSkills] = useState([]);
    const [filteredSkills, setFilteredSkills] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('./utils/skills.json');
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const skills = await response.json();
                setSkills(skills);  // Set the skills state here
            } catch (error) {
                console.error('Error loading the JSON file:', error);
            }
        };
        fetchData();
    }, []);
    

    useEffect(() => {
        if(filter === 'all'){
            setFilteredSkills(skills)
        }
        else{
            setFilteredSkills(skills.filter(skill => skill.type === filter));
        }
    }, [filter, skills])
    
    const handleSkillClick = (skill) =>{
        setSelectedSkill(skill);
    }
    
    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }
    
    const handleClosePopup = () =>{
        setSelectedSkill(null);
    }


    return (
        
        <main id="main-progressions">
            <h1 id="title">PROGRESSIONS</h1>
            <p id="description">Below is a list of calisthenics skills. Use the filter to narrow your search.</p>
            <select id="filter" name="exercise-type" onChange={handleFilterChange}>
                <option value="all">All Skills</option>
                <option value="handstanding">Handstanding</option>
                <option value="push">Push</option>
                <option value="pull">Pull</option>
                <option value="leg">Leg</option>
                <option value="miscellaneous">Miscellaneous</option>
            </select>
            <div id="cards">
                {filteredSkills.map(skill => (
                    <SkillCard
                        name={skill.name}
                        image={skill.image}
                        onClick={() => handleSkillClick(skill)}
                    />
                ))}
            </div>
            {selectedSkill && (
                <SkillPopup skill={selectedSkill} onClose={handleClosePopup} />
            )}
        </main>
    );
}

export default ProgressionMain;

