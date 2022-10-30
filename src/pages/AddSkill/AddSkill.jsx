import { useState, useRef, useEffect } from "react"

function AddSkill(props) {
    
  const [formData, setFormData] = useState({
      name: '',
      fluency: '',
      years: 0
    })

  const [validForm, setValidForm] = useState(false)

  const formElement = useRef()

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleChange = evt => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  
	return (
		<>
			<h1>Add Skill</h1>
			<form autoComplete="off" ref={formElement}>
				<div className="form-group mb-3">
					<label htmlFor="name-input" className="form-label">
						Skill's Name (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="name-input"
						name="name"
            value={formData.name}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="fluency-input" className="form-label">
						Fluency (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="fluency-input"
						name="fluency"
            value={formData.fluency}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="years-input" className="form-label">
						Years
					</label>
					<input 
						type="number"
						className="form-control"
						id="years-input"
						name="years"
            value={formData.years}
            onChange={handleChange}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Skill
					</button>
				</div>
			</form>
		</>
	)
}

export default AddSkill