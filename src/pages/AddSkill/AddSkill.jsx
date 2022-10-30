import { useState } from "react"

function AddSkill(props) {
    
  const [formData, setFormData] = useState({
      name: '',
      fluency: '',
      years: 0
    })
  

	return (
		<>
			<h1>Add Skill</h1>
			<form autoComplete="off">
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
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
					>
						Add Skill
					</button>
				</div>
			</form>
		</>
	)
}

export default AddSkill