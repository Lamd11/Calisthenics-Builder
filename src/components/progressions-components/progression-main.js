import React, { useState, useEffect } from "react";
import SkillCard from "./skill-card";
import SkillPopup from "./skill-popup";
import SearchBar from "./search-bar";

const ProgressionMain = () => {
    const [skills, setSkills] = useState([]);
    const [filteredSkills, setFilteredSkills] = useState([]);
    const [selectedSkill, setSelectedSkill] = useState(null);
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

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

        let updatedSkills = skills
        
        if (filter !== 'all') {
            updatedSkills = skills.filter(skill => skill.type === filter);
        }
        if (searchTerm) {
            updatedSkills = updatedSkills.filter(skill => 
                skill.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        setFilteredSkills(updatedSkills);
    }, [filter, skills, searchTerm])

    const handleSkillClick = (skill) => {
        setSelectedSkill(skill);
    }

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }

    const handleClosePopup = () => {
        setSelectedSkill(null);
    }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }


    return (

        <main className='flex flex-col pl-24 pr-24 justify-center align-center'>
            <h1 className="text-6xl text-center">PROGRESSIONS</h1>
            <p className="text-center text-gray-800">Below is a list of calisthenics skills. Use the filter to narrow your search.</p>
            <select
                name="exercise-type"
                onChange={handleFilterChange}
                className="p-4 text-center max-w-xl ml-auto mr-auto">
                <option value="all">All Skills</option>
                <option value="handstanding">Handstanding</option>
                <option value="push">Push</option>
                <option value="pull">Pull</option>
                <option value="leg">Leg</option>
                <option value="miscellaneous">Miscellaneous</option>
            </select>
            <div className="flex mb-8">
                <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange}/>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-12 mb-8">
                {filteredSkills.map(skill => (
                    <SkillCard
                        name={skill.name}
                        image={skill.image}
                        type={skill.type}
                        difficulty={skill.difficulty}
                        description={skill.description}
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

