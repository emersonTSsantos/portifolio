import Titulo from '../../components/titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={26}>Sobre mim</Titulo>
    <Paragrafo tipo="secundario">
      Olá, bem vindo ao meu portfólio! Obrigado pela oportunidade de me
      apresentar.
    </Paragrafo>
    <Paragrafo tipo="secundario">
      Sou desenvolvedor front-end com sólida experiência em React e TypeScript,
      focado em criar interfaces intuitivas e eficientes. Tenho domínio em
      ferramentas modernas como Redux Toolkit, React Router DOM, AJAX, Gulp,
      além de habilidades em HTML, CSS e JavaScript.
    </Paragrafo>
    <Paragrafo tipo="secundario">
      Além disso, possuo experiência com testes end-to-end utilizando Cypress,
      conhecimentos básicos em Python e SQL, e uma abordagem orientada a
      performance e qualidade. Já integrei APIs RESTful, implementei formulários
      com validação avançada e desenvolvi páginas dinâmicas e responsivas.
    </Paragrafo>
    <Paragrafo tipo="secundario">
      Sou movido por desafios e busco contribuir com soluções que aliem
      funcionalidade e uma experiência de usuário impecável. Estou animado para
      agregar ao time e colaborar no desenvolvimento de projetos impactantes!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=emersonTSsantos&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=emersonTSsantos&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
