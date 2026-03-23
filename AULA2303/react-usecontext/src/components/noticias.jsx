import { useContext } from "react";
import { ContextoTema } from "../contexts/temaContexto";
import "./noticias.css";

export default function Noticias() {

    const { tema } = useContext(ContextoTema);

    const noticias = [
        {
            titulo: "Tecnologia avança no Brasil",
            descricao: "O setor tecnológico brasileiro cresce cada vez mais com novas startups e investimentos.",
            foto: "https://picsum.photos/300/200?1"
        },
        {
            titulo: "React continua dominando o mercado",
            descricao: "Frameworks modernos continuam evoluindo e o React permanece entre os mais utilizados.",
            foto: "https://picsum.photos/300/200?2"
        },
        {
            titulo: "Inteligência Artificial em destaque",
            descricao: "Empresas investem cada vez mais em soluções baseadas em IA para automação e inovação.",
            foto: "https://picsum.photos/300/200?3"
        }
    ];

    return (
        <section className={`noticias noticias-${tema}`}>

            <h2>Últimas Notícias</h2>

            <div className="container-cards">

                {noticias.map((n, i) => (
                    <div key={i} className={`card card-${tema}`}>

                        <img src={n.foto} alt={n.titulo} />

                        <h3>{n.titulo}</h3>

                        <p>{n.descricao}</p>

                    </div>
                ))}

            </div>

        </section>
    );
}