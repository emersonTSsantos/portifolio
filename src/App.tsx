import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import Sobre from './containers/Sobre'
import Projetos from './containers/Projetos'
import temaLight from './temas/light'
import temaDark from './temas/dark'
import Habilidades from './containers/Habilidades'

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false)

  function trocarTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark)
  }

  return (
    <ThemeProvider theme={estaUsandoTemaDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocarTema={trocarTema} />
        <main>
          <Sobre />
          <Projetos />
          <Habilidades />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
