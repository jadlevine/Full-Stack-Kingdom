import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div>WELCOME TO</div>
      <div className="page-title">FULL-STACK KINGDOM</div>
    </header>
  )
}

export default Header
