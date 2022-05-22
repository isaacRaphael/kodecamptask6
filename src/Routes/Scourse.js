import React from 'react'
import { useParams } from 'react-router-dom'
import course from '../Data/Courses'
import Single from '../Components/Single'
import Dashboard from './Dashboard'

const Scourse = () => {
const { id } = useParams()
const dcourse = course.filter(x => x.id.toString() == id)[0]
  return (
    <Single dcourse={dcourse}/>
  )
}

export default Scourse