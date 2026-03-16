
import './App.css';
import logoSesi from './assets/img/rg.jpg';
import logoSenai from './assets/img/rato.png';

export default function App() {

  return (
    <>

    <div className="container">
      <img src={logoSesi} alt="logo do Sesi" className="logo" />
      <img src={logoSenai} alt="logo do Senai" className="logo" />
      <h1 className="titulo">Login</h1>
      <span className="subtitulo">para continuar</span>
      <label htmlFor="nome" className="label"> Nome</label>
      <input type="text" className="campo" id='none' placeholder='Seu nome' />
      <label htmlFor="senha" className="label">Senha</label>
      <input type="text" className="campo" id='senha' placeholder='*****' />
      <button className="botao">Log In</button>
      <a className="textoFooter">Esqueceu a senha?</a>
      <a className="textoFooter">Cadastre-se</a>
    </div>


    </>
  )
}

//export default App;