import { Link } from "react-router-dom";
import styled from "styled-components";

// Definindo `Container` e evitando que `NoBorder` seja passado para o DOM
export const Container = styled.section.withConfig({
  shouldForwardProp: (prop) => prop !== 'NoBorder',
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 760px;
  border:  ${({ NoBorder }) => (NoBorder ? 'none' : '0.12rem solid rgb(175, 149, 1)')};
  background-color: black;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 520px;
    height: 800px;
  }
  @media screen and (max-width: 576px) {
    width: 480px;
    height: 700px;
  }
`;

export const Imagem = styled.img`
  width: 390px;
  height: 580px;
  @media screen and (max-width: 768px) {
    width: 490px;
    height: 660px;
  }
  @media screen and (max-width: 576px) {
    width: 450px;
    height: 570px;
  }
`;

export const Title = styled.h2`
  /* Estilos adicionais para Title */
`;

export const Votos = styled.p`
  padding-top: 15px;
  padding-bottom: 10px;
  color: white;
  font-size: 30px;
`;

export const DetalhesContainer = styled.div`
  background-color: aliceblue;
  width: 50%;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(233, 219, 29);
  border: none;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  padding: 7px 7px 7px 7px;

  &:hover {
    background-color: transparent;
    transition: 0.3s;
    border: 1px solid yellow;
    cursor: pointer;
    color: yellow;
  }
`;

export const Detalhes = styled(Link)`
  padding-bottom: 12px;
  padding-top: 10px;
  font-size: 25px;
  font-weight: 500;
  color: black;

  &:hover {
    color: yellow;
    transition: 0.3s;
  }
`;
