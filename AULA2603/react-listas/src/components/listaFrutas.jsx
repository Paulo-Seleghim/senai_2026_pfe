const frutas = [
    { id: 1, nome: 'Maçã🍎' },
    { id: 2, nome: 'Banana🍌' },
    { id: 3, nome: 'Pêra🍐' },
    { id: 4, nome: 'Abacaxi🍍' },
    { id: 5, nome: 'Manga🥭' }
]

export default function ListaFrutas({ titulo }) {

    const listaFrutas = frutas.map((fruta) => {
        return (
            <li key={fruta.id}>
                <h3>{fruta.nome}</h3>
            </li>
        )
    })

    return(
        <>
            <h1>{titulo}</h1>
            <ul>{listaFrutas}</ul>
        </>
    )
}