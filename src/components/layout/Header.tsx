import '../../styles/Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">Landing<span>Kit</span></div>
        <nav className="nav">
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <button className="cta-button">Get Started</button>
      </div>
    </header>
  )
}

export default Header
