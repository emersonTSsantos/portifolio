import styled from 'styled-components'

export const FotoPerfil = styled.img`
  max-width: 100%;
  border-radius: 50%;
  margin-bottom: 24px;
  cursor: pointer;
  transition: transform 0.3s ease;

  @media (max-width: 768px) {
    width: 250px;
    margin-left: 8%;
  }

  &:hover {
    transform: scale(1.1);
  }

  &.expanded {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 9999;
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
`
