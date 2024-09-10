import './Header.css';
//@ts-ignore
import CardsContainer from './CardsContainer.jsx';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Welcome</h1>
      </div>

      <nav className="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/social">Social</a></li>
        </ul>
      </nav>

      {/* Render CardsContainer here */}
      <CardsContainer />
    </header>
  );
}

export default Header;
