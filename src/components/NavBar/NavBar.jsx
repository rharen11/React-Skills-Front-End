import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      <header className="App-header">
        React Skills 
        {user ?
          <nav>
            <Link to="/skills">Skills</Link>
            <Link to="/add">Add Skill</Link>
            <Link to="" onClick={handleLogout}>Log Out</Link>
            <Link to="/changePassword">Change Password</Link>
          </nav>
        :
          <nav>
            <Link to="/login">Log In</Link>
            <Link to="/signup">Sign Up</Link>
          </nav>
        }
      </header>
    </>
  )
}

export default NavBar
