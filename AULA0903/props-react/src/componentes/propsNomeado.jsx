export default function PropsNomeado({titulo, subtitulo, status='true'}){
    return(
        <>
            <h1>{titulo}</h1>
            <h1>{subtitulo}</h1>
                <span>O status é {status}</span>
        </>
    )
}