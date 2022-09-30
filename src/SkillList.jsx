import Skill from "./Skill"

const SkillList = (props) => {
  return (
    <>
      <h2>This is a skill list component!</h2>
      {props.skills.map(skill =>
        <Skill key={skill.name} skill={skill}/>
        )}
    </>
  )
}

export default SkillList