import Paragrafo from '../Paragrafo'
import Titulo from '../titulo'
import { Card, LinkBotao, Image, DesProjeto } from './styles'

interface ProjetoProps {
  imagemSrc: string
  imagemAlt: string
  titulo: string
  descricao: string
  link: string
}

export const Projeto = ({
  imagemSrc,
  imagemAlt,
  titulo,
  descricao,
  link,
}: ProjetoProps) => (
  <Card>
    <Image src={imagemSrc} alt={imagemAlt} />
    <DesProjeto>
      <Titulo fontSize={20}>{titulo}</Titulo>
      <Paragrafo fontSize={16} tipo="secundario">
        {descricao}
      </Paragrafo>
    </DesProjeto>

    <LinkBotao href={link} target="_blank" rel="noopener noreferrer">
      Vizualizar
    </LinkBotao>
  </Card>
)

export default Projeto
