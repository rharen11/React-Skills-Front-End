const Skill = (props) => {
  return (
    <>
      <h3> I am {props.skill.fluency} in {props.skill.name} in version {props.skill.version}.</h3>
    </>
  )
}

export default Skill