const Project = (props) => {
  return (
    <>
      <h5> These are my projects in this skill: 
        {props.skill.projects.map(project =>
          <li>{project}</li>
          )}
      </h5>
    </>
  )
}

export default Project