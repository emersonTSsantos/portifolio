import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin-top: 24px;
  margin-bottom: 30px;
  margin-left: 10%;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`
export const Info = styled.div`
  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  }
`

export const BotaoTema = styled.button`
  width: 100%;
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 16px;
  font-weight: bold;
  background-color: #282a35;
  cursor: pointer;

  @media (max-width: 768px) {
    margin-bottom: 30px;
    margin-top: 24px;
  }
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`

export const Redes = styled.ul`
  width: 150px;
  margin-bottom: 20px;
  align-items: center;
  list-style: none;
  padding: 0;
  display: flex;

  li {
    display: flex;
  }

  a {
    display: inline-flex;
    margin-right: 10px;
    align-items: center;

    &.github img {
      width: 1300px;
    }
  }

  @media (max-width: 768px) {
    margin-left: 27%;
  }
`
