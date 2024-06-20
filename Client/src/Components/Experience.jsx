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

            <div className='container pb-2 fade-in'>
                <div className="row">
                    <h1>Experience</h1>
                    <div className="col-md-5 d-flex flex-wrap text-center gap-4">
                        {skillList && skillList.length > 0 && skillList.map((item, index) => {
                            return (
                                <div key={`skill-${index}`} className='px-2 zoom-container'>
                                    <img src={item.image}
                                        className="img-fluid rounded-circle skill-img"
                                        alt={item.name}>
                                    </img>
                                    <h4>{item.name}</h4>
                                </div>
                            )
                        })}
                    </div>

                    <div className="col-md-7">
                        <div className='d-flex flex-column gap-1'>
                            {experienceList && experienceList.length > 0 &&
                                experienceList.map((item, index) => {
                                    return (
                                        <div key={`experience-${index}`}
                                            className='text-light border p-3 rounded-4 zoom-container gradient-bg'>
                                            <h5>{`${item.companyName} ${item.position}`}</h5>
                                            {item.description && item.description.map((item, index) => {
                                                return (
                                                    <li key={`experience-description-${index}`}
                                                        className='mb-0 fs-6'>{item}
                                                    </li>
                                                )
                                            })}
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
