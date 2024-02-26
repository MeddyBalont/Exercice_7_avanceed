import { Link } from 'react-router-dom'

function Header() {
      return (
            <nav>
                  <Link to="/">Acceuil</Link>
                  <Link to="/Survey">Questionnaire</Link>
            </nav>
      )
}

export default Header
