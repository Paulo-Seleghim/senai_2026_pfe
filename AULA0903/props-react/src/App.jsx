import './App.css'
import PropsNomeado from './Components/propsNomeado.jsx'

function App() {
  return (
    // <Saudacao titulo = 'Aprendendo Props/Properties/Propriedades'
    // texto = 'Bem vindo' nome = 'Amorim!' />

    // <Avatar titulo = 'Quem sou eu?'
    // fotoPerfil = {fotoPerfil}
    // nome = 'Meu nome é Arthur Amorim,' idade = 'tenho 17 anos.' estiloMusical = 'Meu estilo de música favorito é gospel'
    // disciplinaFavorita = 'e Língua Portuguesa é minha matéria favorita.' />

    <PropsNomeado titulo = 'Usando Props Nomeado'
    subtitulo = 'Aprendendo props named' />
  )
}

export default App

/*import MeuAvatar from './componentes/MeuAvatar.jsx';
import Fotinha from './componentes/fotinha.jpg';

export default function App() {
  return (
    <>
      <MeuAvatar
        nome="Jair Bolsonaro"
        idade="69"
        foto={Fotinha}
        estiloMusical="Sertanejo"
        disciplina="Educação Física"
      />
    </>
  );
}*/