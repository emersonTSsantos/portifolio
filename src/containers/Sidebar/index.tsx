import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/titulo'

import { Descricao, BotaoTema, SidebarContainer, Redes, Info } from './styles'

type Props = {
  trocarTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Info>
        <Titulo fontSize={15}>Emerson Teixeira</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          emersonTSsantos
        </Paragrafo>
      </Info>
      <Descricao tipo="principal" fontSize={20}>
        Dev Junior
      </Descricao>
      <Redes>
        <li>
          <a
            href="https://www.linkedin.com/in/emerson-teixeira-/"
            target="blank"
          >
            <img
              src="https://www.freepnglogos.com/uploads/linkedin-blue-style-logo-png-0.png"
              alt="Incone linkedin"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/emerson-teixeira-/"
            target="blank"
          ></a>
          <a
            className="github"
            href="https://github.com/emersonTSsantos"
            target="blank"
          >
            <img
              src="https://pngimg.com/uploads/github/github_PNG28.png"
              alt="incone github"
            />
          </a>
        </li>
      </Redes>
      <BotaoTema onClick={props.trocarTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
