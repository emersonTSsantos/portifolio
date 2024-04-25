import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid #c1c1c1;
  width: 80%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  margin: 20px;

  &:hover {
    transform: scale(1.1);
  }
`
export const LinkBotao = styled.a`
  color: #fff;
  font-size: 20px;
  background-color: #4476bf;
  text-decoration: none;
  padding-left: 40px;
  padding-bottom: 2px;
  padding-top: 2px;
  display: inline-block;
  border-radius: 10px;
  margin-top: 24px;
  margin-bottom: 15px;
  cursor: pointer;
  width: 50%;
  margin-left: 22%;

  @media (max-width: 768px) {
    margin-left: 15%;
    padding-bottom: 2px;
    padding-top: 2px;
  }
`
export const Image = styled.img`
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd;
`

export const DesProjeto = styled.div`
  h3 {
    text-align: center;
    font-size: 25px;
  }

  p {
    margin-left: 15px;
  }
`
