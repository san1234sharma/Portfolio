import React from 'react'
import "./Projects.css"
import { Button, Typography } from '@mui/material'
import { AiOutlineProject } from "react-icons/ai"
import { Delete } from '@mui/icons-material'
import { FaRegSmileWink } from "react-icons/fa"
import { deleteProject } from '../../actions/user'
import { useDispatch } from 'react-redux'
import { getUser } from '../../actions/user'

export const ProjectCard = ({
    url,
    projectImage,
    projectTitle,
    description,
    technologies,
    isAdmin = false,
    id,
}) => {
    const dispatch = useDispatch();
    const deleteHandler = async (id) => {
        await dispatch(deleteProject(id));
        dispatch(getUser());
    };
    return (
        <>
            <a href={url} className='projectcard' target='_blank' rel="noopener noreferrer">
                <div>
                    <img src={projectImage} alt='project' />
                    <Typography variant='h5'>{projectTitle}</Typography>
                </div>
                <div>
                    <Typography variant='h4'>About Project</Typography>
                    <Typography>{description}</Typography>
                    <Typography variant='h6'>Tech Stack: {technologies}</Typography>
                </div>
            </a>
            {isAdmin && (
                <Button style={{ color: "rgba(40,40,40,0.7)" }} onClick={() => deleteHandler(id)}>
                    <Delete />
                </Button>
            )}
        </>
    );
};

const Projects = () => {
    const projects = [
        {
            url: "https://github.com/san1234sharma/Student-Space",
            projectImage: "https://private-user-images.githubusercontent.com/145186016/350226645-56dbe5b6-a36b-4330-8706-685d60641d0c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE0OTM0MTMsIm5iZiI6MTcyMTQ5MzExMywicGF0aCI6Ii8xNDUxODYwMTYvMzUwMjI2NjQ1LTU2ZGJlNWI2LWEzNmItNDMzMC04NzA2LTY4NWQ2MDY0MWQwYy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyMFQxNjMxNTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00NGMyMGY2MGE0MjRjYjg4OGJjYjM5M2MwMTg2ZTM4NzI1ODMzZmY1NzgzMWUyYmMyMDYxZGQ2ZDgzYzUzNWI0JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.aIMc9K3yczPFE8QSYxj-RIiecwIvM39DeG4ujHC3lw0",
            projectTitle: "Project 1",
            description: "This is the first sample project.",
            technologies: "MongoDB, Node.js, Express.js, React",
            id: 1
        },
        {
            url: "https://github.com/san1234sharma/Equity-Edge",
            projectImage: "https://private-user-images.githubusercontent.com/145186016/349892610-3a932bcc-26e5-4706-be67-588e3368c2bb.jpg?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE0OTM0NTcsIm5iZiI6MTcyMTQ5MzE1NywicGF0aCI6Ii8xNDUxODYwMTYvMzQ5ODkyNjEwLTNhOTMyYmNjLTI2ZTUtNDcwNi1iZTY3LTU4OGUzMzY4YzJiYi5qcGc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyMFQxNjMyMzdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT04NTBhY2RlODJjODhkNDNkYjI2M2E2NGVkMzUwZWFkNTUwOTI3OTVjOGE5MGEyZTI4MzMxMjM4NDI2N2U4YjE2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.oVEj2xglM4JJEbxyRrpD8wHOMU7lEfNZ9jD1hkw2JV8",
            projectTitle: "Project 2",
            description: "This is the second sample project.",
            technologies: "MySQL, PHP, Laravel, Vue.js",
            id: 2
        },
        {
            url: "https://github.com/san1234sharma/Labware",
            projectImage: "https://screenshots.webflow.com/sites/6142579a99a6d6721bf035a6/20211111195241_88e078df9c87fa0c022b1ea2ed0c91b6.png",
            projectTitle: "Project 3",
            description: "This is the third sample project.",
            technologies: "PostgreSQL, Python, Flask, Angular",
            id: 3
        }
    ];

    return (
        <div className='projects'>
            <Typography variant='h3'>
                Projects <AiOutlineProject />
            </Typography>
            <div className="projectwrapper">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        url={project.url}
                        projectImage={project.projectImage}
                        projectTitle={project.projectTitle}
                        description={project.description}
                        technologies={project.technologies}
                        id={project.id}
                        isAdmin={false} // Change this based on your requirements
                    />
                ))}
            </div>
            <Typography variant='h3' style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
                This includes some of the major projects done by me. <FaRegSmileWink />
            </Typography>
        </div>
    );
};

export default Projects;
