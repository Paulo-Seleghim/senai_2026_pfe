import { useEffect, useState } from "react";

export default function Aluno(){
    const [nome, setNome] = useState('');
    const [idade, setIdade] = useState(0);

    // Executa toda vez
    useEffect(() => {
        console.log('App renderizado!');
    });

    // Executa na montagem do componente
    useEffect(() => {
        console.log('App montado!');
    }, []);

    // Executa quando o nome muda
    useEffect(() => {
        console.log('O nome mudou para:', nome);
    }, [nome]);

    // Executa quando a idade muda
    useEffect(() => {
        console.log('A idade mudou para:', idade);
    }, [idade]);

    return(
        <>
            <form>
                <input
                    type="text"
                    value={nome}
                    placeholder="Digite o nome"
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    type="number"
                    value={idade}
                    placeholder="Digite a idade"
                    onChange={(e) => setIdade(Number(e.target.value))}
                />
            </form>
        </>
    );
}