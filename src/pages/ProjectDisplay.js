import React from 'react'
import { useParams } from 'react-router-dom';
import {ProjectList} from '../helpers/ProjectList'
import GitHubIcon from '@material-ui/icons/GitHub';
import Code from '@material-ui/icons/Code'
import '../styles/ProjectDisplay.css'


function ProjectDisplay() {
    const { id } = useParams();
    const project  = ProjectList[id];
  return (
    <div className='project'>
      <h1>{project.name}</h1>
      <img  src={project.image} alt='projectImg'/>
      <a href={project.link}><GitHubIcon /></a>
      <a href={project.deploy}><Code /></a>
    </div>
  )
}

export default ProjectDisplay
