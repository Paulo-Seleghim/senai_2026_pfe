export default function MeuAvatar(props) {
  return (
    <>
      <img src={props.foto} alt={props.nome} />
      <h2>{props.nome}</h2>
      <p>Idade: {props.idade}</p>
      <p>Estilo musical: {props.estiloMusical}</p>
      <p>Disciplina favorita: {props.disciplina}</p>
    </>
  );
}
