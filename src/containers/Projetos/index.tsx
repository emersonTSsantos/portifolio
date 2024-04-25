import Projeto from '../../components/projeto'
import Titulo from '../../components/titulo'
import Imc from '../../images/baixados.png'
import Disney from '../../images/disney.png'
import Tarefas from '../../images/gerenciador.png'
import Evento from '../../images/EventoMexicano.png'
import Media from '../../images/MediadeNotas.png'
import Avatar from '../../images/avatar.png'
import Perfil from '../../images/perfilGithub.png'
import Portifolio from '../../images/Portifolio.png'

import { Lista, TituloLista } from './styles'

const Projetos = () => (
  <>
    <TituloLista>
      <Titulo fontSize={35}>Projetos</Titulo>
    </TituloLista>

    <Lista>
      <li>
        <Projeto
          imagemSrc={Disney}
          imagemAlt="Clone da Disney"
          titulo="Clone da Disney"
          descricao="Projeto desenvolvido utilizando o gulp com SASS e o metodo BEM"
          link="https://clone-disneyplus-kppm.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          imagemSrc={Imc}
          imagemAlt="Calculadora Imc"
          titulo="Calculadora Imc"
          descricao="Este projeto foi feito com React e javaScript puro"
          link="https://calculadora-imc-react-topaz.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          imagemSrc={Tarefas}
          imagemAlt="Gerenciador de tarefas"
          titulo="Gerenciador de tarefas"
          descricao="Projeto desenvolvido utilizando o VueJS"
          link="https://todo-vue-eight.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          imagemSrc={Evento}
          imagemAlt="Evento Mexicano"
          titulo="Evento Mexicano"
          descricao="Desenvolvido utilizando o Parcel, aplicação de animação e getTime"
          link="https://evento-mexicano2.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          imagemSrc={Avatar}
          imagemAlt="Fã Avatar 2"
          titulo="Fã de Avatar 2"
          descricao="Projeto Desenvolvido com o gulp e trabalhando com videos"
          link="https://site-avatar2.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          imagemSrc={Perfil}
          imagemAlt="Perfil Github"
          titulo="Perfil Github"
          descricao="Projeto na qual voçê consome uma API externa e pesquisa por um usuário"
          link="https://github-perfil-emerson.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          imagemSrc={Media}
          imagemAlt="Media do aluno"
          titulo="Media do aluno"
          descricao="Projeto desenvolvido HTML, CSS E JavaScript, manipulando o DOM"
          link="https://calculadora-medias-navy.vercel.app/"
        />
      </li>
      <li>
        <Projeto
          imagemSrc={Portifolio}
          imagemAlt="Primeiro Portifolio"
          titulo="Primeiro Portifolio"
          descricao="Projeto desenvolvido utilizando o Bootstrap"
          link="https://meu-portifolio-five-rho.vercel.app/"
        />
      </li>
    </Lista>
  </>
)

export default Projetos
