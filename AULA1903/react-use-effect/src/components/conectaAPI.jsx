import { useState } from "react";

export default function BuscaConselho() {

    const [palavra, setPalavra] = useState("");
    const [conselho, setConselho] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function traduzir(texto, origem, destino) {

        const resp = await fetch(
            `https://api.mymemory.translated.net/get?q=${texto}&langpair=${origem}|${destino}`
        );

        const data = await resp.json();

        return data.responseData.translatedText;
    }

    async function buscarConselho() {

        setCarregando(true);

        try {

            // pega conselho aleatório
            const resp = await fetch(
                `https://api.adviceslip.com/advice?t=${Date.now()}`
            );

            const data = await resp.json();

            const conselhoEN = data.slip.advice;

            // traduz para português
            const conselhoPT = await traduzir(conselhoEN, "en", "pt");

            setConselho(conselhoPT);

        } catch (erro) {

            console.error("Erro:", erro);
            setConselho("Não foi possível gerar um conselho.");

        }

        setCarregando(false);
    }

    return (
        <div style={{
            fontFamily: "Arial",
            padding: "20px",
            maxWidth: "600px",
            margin: "0 auto"
        }}>

            <h1>Gerador de Conselhos</h1>

            <input
                type="text"
                placeholder="Digite qualquer palavra..."
                value={palavra}
                onChange={(e) => setPalavra(e.target.value)}
                style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    marginBottom: "10px"
                }}
            />

            <button
                onClick={buscarConselho}
                style={{
                    padding: "10px 20px",
                    borderRadius: "8px",
                    border: "none",
                    background: "#6a0dad",
                    color: "white",
                    cursor: "pointer"
                }}
            >
                Gerar Conselho
            </button>

            {carregando && <p>Buscando conselho...</p>}

            {conselho && (
                <div style={{
                    border: "1px solid #bd70d0",
                    padding: "15px",
                    marginTop: "20px",
                    borderRadius: "10px"
                }}>
                    <p><strong>Conselho:</strong> {conselho}</p>
                </div>
            )}

        </div>
    );
}