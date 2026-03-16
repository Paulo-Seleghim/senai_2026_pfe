export default function Footer() {

  const anoAtual = new Date().getFullYear();

  return (
    <footer>
      <p>
        © {anoAtual} Academia Fofitness. Todos os direitos reservados.
      </p>
    </footer>
  );
}