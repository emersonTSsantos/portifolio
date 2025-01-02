import React, { useState } from 'react'
import Projeto from '../../components/projeto'
import Titulo from '../../components/titulo'
import Imc from '../../images/baixados.png'
import Disney from '../../images/disney.png'
import Tarefas from '../../images/lista_de_tarefas.png'
import Evento from '../../images/EventoMexicano.png'
import Media from '../../images/MediadeNotas.png'
import Avatar from '../../images/avatar.png'
import Perfil from '../../images/perfilGithub.png'
import efood from '../../images/efood.png'
import Restaurante from '../../images/restaurante.png'
import Contato from '../../images/Contatos.png'
import Games from '../../images/lojadegames.jpeg'

import { Lista, TituloLista, DivBotoes } from './styles'

const projetosData = [
  {
    imagemSrc: efood,
    imagemAlt: 'Projeto do resturante efood',
    titulo: 'Efood Delivery',
    descricao: 'Projeto desenvolvido utilizando react, redux e ajax',
    link: 'https://efood-silk-delta.vercel.app/',
  },
  {
    imagemSrc: Games,
    imagemAlt: 'Projeto do eplay',
    titulo: 'Loja Eplay',
    descricao: 'Projeto desenvolvido utilizando react, redux e ajax',
    link: 'https://loja-de-games-delta.vercel.app/',
  },
  {
    imagemSrc: Disney,
    imagemAlt: 'Clone da Disney',
    titulo: 'Clone da Disney',
    descricao: 'Projeto desenvolvido utilizando o gulp com SASS e o metodo BEM',
    link: 'https://clone-disneyplus-kppm.vercel.app/',
  },
  {
    imagemSrc: Restaurante,
    imagemAlt: 'Restaurante',
    titulo: 'Restaurante',
    descricao: 'Projeto utilizando o Bootstrap, trabalhando com o DOM e CSS',
    link: 'https://projeto-restaurante-beta.vercel.app/',
  },
  {
    imagemSrc: Avatar,
    imagemAlt: 'Fã Avatar 2',
    titulo: 'Fã de Avatar 2',
    descricao: 'Projeto Desenvolvido com o gulp e trabalhando com videos',
    link: 'https://site-avatar2.vercel.app/',
  },
  {
    imagemSrc: Contato,
    imagemAlt: 'Lista de Contatos',
    titulo: 'Lista de Contatos',
    descricao:
      'Desenvolvido com React, utilização do Redux para controle de estado',
    link: 'https://lista-de-contatos-com-react-six.vercel.app/',
  },
  {
    imagemSrc: Imc,
    imagemAlt: 'Calculadora Imc',
    titulo: 'Calculadora Imc',
    descricao: 'Este projeto foi feito com React e javaScript puro',
    link: 'https://calculadora-imc-react-topaz.vercel.app/',
  },
  {
    imagemSrc: Tarefas,
    imagemAlt: 'Gerenciador de tarefas',
    titulo: 'Gerenciador de tarefas',
    descricao: 'Projeto desenvolvido utilizando o REACT, e Redux',
    link: 'https://minha-lista-de-tarefas-lemon.vercel.app/',
  },
  {
    imagemSrc: Contato,
    imagemAlt: 'Lista de Contatos',
    titulo: 'Lista de Contatos',
    descricao:
      'Desenvolvido com React, utilização do Redux para controle de estado',
    link: 'https://lista-de-contatos-com-react-six.vercel.app/',
  },
  {
    imagemSrc: Evento,
    imagemAlt: 'Evento Mexicano',
    titulo: 'Evento Mexicano',
    descricao:
      'Desenvolvido utilizando o Parcel, aplicação de animação e getTime',
    link: 'https://evento-mexicano2.vercel.app/',
  },
  {
    imagemSrc: Perfil,
    imagemAlt: 'Perfil Github',
    titulo: 'Perfil Github',
    descricao: 'Consume uma API externa e pesquise por um usuário no GitHub',
    link: 'https://github-perfil-emerson.vercel.app/',
  },
  {
    imagemSrc: Media,
    imagemAlt: 'Media do aluno',
    titulo: 'Media do aluno',
    descricao: 'Projeto desenvolvido HTML, CSS E JavaScript, manipulando o DOM',
    link: 'https://calculadora-medias-navy.vercel.app/',
  },
]

const Projetos = () => {
  const [paginaAtual, setPaginaAtual] = useState(1)
  const projetosPorPagina = 6
  const paginaInicial = (paginaAtual - 1) * projetosPorPagina
  const paginaFinal = paginaAtual * projetosPorPagina
  const projetosNaPagina = projetosData.slice(paginaInicial, paginaFinal)

  const handlePaginaAnterior = () => {
    if (paginaAtual > 1) {
      setPaginaAtual(paginaAtual - 1)
    }
  }

  const handleProximaPagina = () => {
    const totalPaginas = Math.ceil(projetosData.length / projetosPorPagina)
    if (paginaAtual < totalPaginas) {
      setPaginaAtual(paginaAtual + 1)
    }
  }

  return (
    <>
      <TituloLista>
        <Titulo fontSize={35}>Projetos</Titulo>
      </TituloLista>

      <DivBotoes>
        <button onClick={handlePaginaAnterior}>Página 1</button>
        <button onClick={handleProximaPagina}>Página 2</button>
      </DivBotoes>

      <Lista>
        {projetosNaPagina.map((projeto, index) => (
          <li key={index}>
            <Projeto
              imagemSrc={projeto.imagemSrc}
              imagemAlt={projeto.imagemAlt}
              titulo={projeto.titulo}
              descricao={projeto.descricao}
              link={projeto.link}
            />
          </li>
        ))}
      </Lista>
    </>
  )
}

export default Projetos
