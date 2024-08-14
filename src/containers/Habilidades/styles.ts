import styled from 'styled-components'

export const ListaHards = styled.div`
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0px;
  row-gap: 80px;
  max-width: 100%;
  margin-left: 0;
  margin-top: 60px;
  border-radius: 60px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    margin-bottom: 50px;
    border-radius: 10px;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 150px;
    height: auto;
  }

  .html {
    margin-top: 20px;
  }

  .css {
    width: 250px;
    margin-top: 20px;
  }

  .grunt {
    margin-bottom: 20px;
  }

  .vue {
    width: 250px;
  }
`
