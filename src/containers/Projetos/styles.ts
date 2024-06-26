import styled from 'styled-components'

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 6px;
  row-gap: 40px;
  max-width: 100%;
  margin-left: 2%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    column-gap: 0;
    row-gap: 16px;
  }
`
export const TituloLista = styled.div`
  text-align: center;
  margin-top: 40px;
`
export const DivBotoes = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    font-size: 20px;
    font-weight: bold;
    border: none;
    padding-bottom: 5px;
    background: none;
    text-transform: uppercase;
    margin: 0 1vw;
    margin-bottom: 30px;
    margin-top: 30px;
    cursor: pointer;
    border-bottom: 5px solid transparent;
    border-color: ${(props) => props.theme.corBordaBotaoNav};
    color: ${(props) => props.theme.corPrincipal};

    @media (max-width: 768px) {
      font-size: 13px;
    }

    &:hover {
      border-color: ${(props) => props.theme.corHoverBordaNav};
    }

    &:focus {
      outline: none;
    }

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`
