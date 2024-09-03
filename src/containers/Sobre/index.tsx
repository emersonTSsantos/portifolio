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
      Estou vivendo a transição de carreira para programação e busco uma
      oportunidade de estágio. Quero colocar em prática os conhecimentos que
      adquiri e tenho um enorme desejo de aprender muito mais com sua equipe!
      Tenho certeza que com o conhecimento que possuo vou agregar muito também.
      Me coloco à disposição para participar do processo seletivo, e certamente
      você não vai se decepcionar.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=emersonTSsantos&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=emersonTSsantos&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
