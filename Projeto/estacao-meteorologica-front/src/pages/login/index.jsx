/*import { useState } from "react";
import { Link } from "react-router-dom";
//import imgEstacao from "../../assets/estacao.png";
import imgEstacao from "/src/assets/estacao.png";

export default function Login(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Usuário:", usuario);
        console.log("Senha:", senha);
    };

    return(
        <section>
            <div>

                <div>
                    <img src={imgEstacao} alt="Estação meteorológica" />
                </div>

                <div>
                    <h2>Login</h2>

                    <form onSubmit={handleLogin}>

                        <label htmlFor="usuario">Usuário</label>
                        <input 
                            type="text"
                            name="usuario"
                            id="usuario"
                            value={usuario}
                            onChange={(e) => setUsuario(e.target.value)}
                        />

                        <label htmlFor="senha">Senha</label>
                        <input 
                            type="password"
                            name="senha"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />

                        <button type="submit">Login</button>

                    </form>

                </div>

            </div>
        </section>
    )
}*/
/*import { useState } from "react";
import { Link } from "react-router-dom";
import imgEstacao from "../../assets/estacao.png";

export default function Login(){
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Usuário:", usuario);
        console.log("Senha:", senha);
    };

    return(
        <section className="container d-flex justify-content-center align-items-center vh-100">
            <div className="row shadow p-4 bg-white rounded">

                <div className="col-md-6 text-center">
                    <img 
                        src={imgEstacao} 
                        alt="Estação meteorológica"
                        style={{ width: "250px" }}
                        className="img-fluid"
                    />
                </div>

                <div className="col-md-6">
                    <h2 className="mb-4">Login</h2>

                    <form onSubmit={handleLogin}>

                        <div className="mb-3">
                            <label htmlFor="usuario" className="form-label">
                                Usuário
                            </label>

                            <input 
                                type="text"
                                id="usuario"
                                className="form-control"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="senha" className="form-label">
                                Senha
                            </label>

                            <input 
                                type="password"
                                id="senha"
                                className="form-control"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </div>

                        <button className="btn btn-primary w-100">
                            Login
                        </button>

                    </form>

                </div>

            </div>
        </section>
    )
}*/
import "./login.css";
import { useState } from "react";
import imgEstacao from "../../assets/estacao.png";

export default function Login(){

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Usuário:", usuario);
        console.log("Senha:", senha);
    };

    return(
        <section className="login-bg">

            <div className="container vh-100 d-flex justify-content-center align-items-center">

                <div className="row login-card">

                    <div className="col-md-6 text-center login-img">
                        <img 
                            src={imgEstacao} 
                            alt="Estação meteorológica"
                            className="img-fluid"
                        />
                        <h3 className="mt-3">Estação Meteorológica</h3>
                        <p>Monitoramento climático em tempo real</p>
                    </div>

                    <div className="col-md-6 p-5">

                        <h2 className="mb-4 text-center">Login</h2>

                        <form onSubmit={handleLogin}>

                            <div className="mb-3">
                                <label className="form-label">Usuário</label>

                                <input
                                    type="text"
                                    className="form-control"
                                    value={usuario}
                                    onChange={(e)=> setUsuario(e.target.value)}
                                    placeholder="Digite seu usuário"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="form-label">Senha</label>

                                <input
                                    type="password"
                                    className="form-control"
                                    value={senha}
                                    onChange={(e)=> setSenha(e.target.value)}
                                    placeholder="Digite sua senha"
                                />
                            </div>

                            <button className="btn btn-primary w-100">
                                Entrar
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </section>
    )
}