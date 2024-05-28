import React, { useEffect, useState } from 'react';

import ProjectData from '../Data/Project.json';

const Project = () => {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        setProjectList(ProjectData);
    }, [])

    return (
        <div className='bg-dark text-white min-vh-100' id='project'>
            {/* space hidden by nav fixed-top */}
            <div className="spacer" style={{ "height": "68px" }}></div>

            <div className="container pb-4 fade-in">
                <h1>Projects</h1>
                <div className='d-flex flex-column flex-md-row mt-2 gap-3'>
                    {projectList && projectList.length > 0 &&
                        projectList.map((item, index) => {
                            return (
                                <div key={`projectList-${index}`}
                                    className="card col-md-4 mb-2 zoom-container mx-auto">
                                    <img
                                        src="/assets/project.jpg"
                                        className="card-img-top px-3 pt-2" alt="Project image" />
                                    <div className="card-body d-flex flex-column px-3 py-2 gap-1">
                                        <h4 className="mb-0">{item.project_title}</h4>
                                        <p className="mb-0">{item.description}</p>
                                        <div className='d-flex flex-wrap gap-2'>
                                            {item.button && item.button.length > 0 &&
                                                item.button.map((item, index) => {
                                                    return (
                                                        <button key={`button-${index}`} className='btn btn-project-skill btn-sm rounded-pill'>{item}</button>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className='d-flex justify-content-between gap-4 mt-2'>
                                            <a href={item.deploy}
                                                className="btn btn-button rounded-pill w-50"
                                                target='_blank'>DEMO
                                            </a>
                                            <a href={item.source}
                                                className="btn btn-button rounded-pill w-50"
                                                target='_blank'>SOURCE
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;
