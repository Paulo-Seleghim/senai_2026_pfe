import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1><span>Academia</span> Fofitness</h1>
      </div>

      <nav className="nav">
        <ul className="menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#modalidades">Modalidades</a></li>
          <li><a href="#planos">Planos</a></li>
          <li><a href="#depoimentos">Depoimentos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}