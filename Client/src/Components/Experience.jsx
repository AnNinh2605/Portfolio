import React, { useEffect, useState } from 'react';

import ExperienceData from '../Data/Experience.json';
import SkillData from '../Data/Skill.json';

const Experience = () => {
    const [experienceList, setExpericenceList] = useState([]);
    const [skillList, setSkillList] = useState([]);

    useEffect(() => {
        setExpericenceList(ExperienceData);
        setSkillList(SkillData);
    }, [])

    return (
        <div className='bg-light text-dark min-vh-100' id='experience'>
            {/* space hidden by nav fixed-top */}
            <div className="spacer" style={{ "height": "68px" }}></div>

            <div className='container pb-4 fade-in'>
                <div className="row">
                    <h1>Experience</h1>
                    <div className="col-md-6 d-flex flex-wrap text-center gap-2">
                        {skillList && skillList.length > 0 && skillList.map((item, index) => {
                            return (
                                <div key={`skill-${index}`} className='px-2 zoom-container'>
                                    <img src={item.image} className="img-fluid rounded-circle skill-img" alt={item.name}></img>
                                    <h3>{item.name}</h3>
                                </div>
                            )
                        })}
                    </div>

                    <div className="col-md-6">
                        <div className='d-flex flex-column gap-3'>
                            {experienceList && experienceList.length > 0 &&
                                experienceList.map((item, index) => {
                                    return (
                                        <div key={`experience-${index}`}
                                            className='text-light border p-3 rounded zoom-container gradient-bg'>
                                            <h4>{item.companyName}</h4>
                                            <p className='mb-0'>{item.description}</p>
                                        </div>
                                    )
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;
