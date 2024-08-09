import React, { useEffect } from "react";
import skillCard from "./skill-card";
import skillPopup from "./skill-popup";


useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('/utils/skills.json');
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            const skills = await response.json();
            return skills;
        } catch (error) {
            console.error('Error loading the JSON file:', error);
            return [];
        }
    };
    fetchData();
}, [])

const handleSkillClick = (skill) =>{
    setSelectedSkill(skill);
}

const handleFilterChange = (e) => {
    setFilter(e.target.value);
}

const handleClosePopup = () =>{
    setSelectedSkill(null);
}

const progressionMain = () => {
    const [skills, setSkills] = useState([]);
    const [filteredSkills, setFilteredSkills] = useState([]);
    const [selectedSkill, setSelectedSkills] = useState(null);
    const [filter, setFilter] = useState('all');


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
                        key={skill.name}
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

export default progressionMain;
