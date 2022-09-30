import Project from "./Project"

const Skill = (props) => {
  return (
    <>
      <h3> I am {props.skill.fluency} in {props.skill.name} in version {props.skill.version}.
      </h3>
      {/* <h5>{props.skills.projects.map(item, idx =>
        <Project key={idx} item={item}/>
        )}
      </h5> */}
      <h5><Project skill={props.skill}/></h5>
    </>
  )
}

export default Skill