import imgMusculacao from './componentes/musculacao.webp'
import imgCorrida from './componentes/corrida.webp'
import imgYoga from './componentes/yoga.avif'

export default function Main() {
  return (
    <main>

      <section id="home" className="home">
        <h2>Transforme seu corpo com a <span>Fofitness</span></h2>
        <p>A academia perfeita para quem deseja saúde, diversão e um shape incrível</p>
        <button>Começar Agora</button>
      </section>

      <section id="sobre" className="sobre">
        <h2>Sobre Nós</h2>
        <p>
          Somos uma academia focada em perda de peso com saúde, bem-estar e sem dietas
          mirabolantes. Nosso lema é: "vem para cá e afine igual um palitinho".
        </p>
      </section>

      <section id="modalidades" className="modalidades">
        <h2>Modalidades</h2>

        <div className="exercicio">
          <h3>Musculação</h3>
          <img src={imgMusculacao} alt="Treino de musculação" />
        </div>

        <div className="exercicio">
          <h3>Corrida</h3>
          <img src={imgCorrida} alt="Treino de corrida" />
        </div>

        <div className="exercicio">
          <h3>Yoga</h3>
          <img src={imgYoga} alt="Aula de yoga" />
        </div>

      </section>

      <section id="planos" className="planos">
        <h2>Planos e Preços</h2>

        <div className="plano">
          <h3>Básico</h3>
          <p className="preco">R$79,99/mês</p>
          <ul>
            <li>Acesso à musculação</li>
            <li>Aulas coletivas limitadas</li>
            <li>Horário Livre</li>
          </ul>
        </div>

        <div className="plano destaque">
          <h3>Premium</h3>
          <p className="preco">R$129,99/mês</p>
          <ul>
            <li>Acesso Total</li>
            <li>Personal Trainer</li>
            <li>Yoga e Funcional</li>
          </ul>
        </div>

        <div className="plano">
          <h3>VIP</h3>
          <p className="preco">R$199,99/mês</p>
          <ul>
            <li>Personal exclusivo</li>
            <li>Nutricionista</li>
            <li>Acompanhamento mensal</li>
            <li>Bom dia da atendente</li>
          </ul>
        </div>

      </section>

      <section id="depoimentos" className="depoimentos">
        <h2>O que nossos alunos dizem</h2>

        <div className="depoimento">
          <p>"A melhor academia de Mirandópolis, ambiente confortável, climatizado e acessível"</p>
          <span>Pedro Barbosa</span>
        </div>

        <div className="depoimento">
          <p>"Professores incríveis e estrutura impecável, recomendo muito!"</p>
          <span>Lio Ono</span>
        </div>

      </section>

      <section id="contato" className="contato">
        <h2>Entre em contato</h2>

        <form>

          <input type="text" placeholder="Seu nome" required />

          <input type="email" placeholder="Seu e-mail" required />

          <textarea placeholder="Mensagem"></textarea>

          <button type="submit">Enviar</button>

        </form>

      </section>

    </main>
  )
}