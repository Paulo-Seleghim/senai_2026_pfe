


export default function BemVindo(props){
    return(
        <>
        <h1>{props.titulo}</h1>
        <h2>{props.texto}<span>{props.nome}</span></h2>
        </>
    )
}