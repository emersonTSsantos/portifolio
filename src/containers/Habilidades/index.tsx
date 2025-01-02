import Titulo from '../../components/titulo'
import { TituloLista } from '../Projetos/styles'
import { ListaHards } from './styles'
import Git from '../../images/git.png'
import Html from '../../images/html.png'
import Css from '../../images/css.png'
import Javascript from '../../images/javascript.png'
import Jquery from '../../images/jquery.png'
import Bootstrap from '../../images/bootstrap.png'
import Vue from '../../images/vue.png'
import Reactjs from '../../images/react.png'
import Gulp from '../../images/gulp.png'
import Typescript from '../../images/typescript.png'
import Grunt from '../../images/grunt.png'
import Sass from '../../images/Sass.png'

const Habilidades = () => {
  return (
    <>
      <TituloLista>
        <Titulo fontSize={35}>Habilidades</Titulo>
      </TituloLista>

      <ListaHards>
        <li>
          <img src={Git} alt="" />
        </li>
        <li>
          <img className="html" src={Html} alt="" />
        </li>
        <li>
          <img className="css" src={Css} alt="" />
        </li>
        <li>
          <img src={Sass} alt="" />
        </li>
        <li>
          <img src={Javascript} alt="" />
        </li>
        <li>
          <img src={Typescript} alt="" />
        </li>
        <li>
          <img src={Jquery} alt="" />
        </li>
        <li>
          <img src={Bootstrap} alt="" />
        </li>
        <li>
          <img className="vue" src={Vue} alt="" />
        </li>
        <li>
          <img src={Reactjs} alt="" />
        </li>
        <li>
          <img src={Gulp} alt="" />
        </li>
        <li>
          <img className="grunt" src={Grunt} alt="" />
        </li>
      </ListaHards>
    </>
  )
}

export default Habilidades
