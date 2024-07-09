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
  width: 400px;
  height: 730px;
  border:  ${({ NoBorder }) => (NoBorder ? 'none' : '0.12rem solid rgb(175, 149, 1)')};
  background-color: black;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 700px;
  }
  @media screen and (max-width: 576px) {
    width: 400px;
    height: 700px;
  }
  @media screen and (max-width: 500px) {
    width: 370px;
    height: 670px;
  }
`;

export const Imagem = styled.img`
  width: 390px;
  height: 560px;
  @media screen and (max-width: 768px) {
    width: 380px;
    height: 560px;
  }
  @media screen and (max-width: 576px) {
    width: 340px;
    height: 500px;
  }
  @media screen and (max-width: 500px) {
    width: 270px;
    height: 460px;
  }
`;

export const Title = styled.h2`
  /* Estilos adicionais para Title */
`;

export const Votos = styled.p`
  padding-top: 30px;
  padding-bottom: 10px;
  color: white;
  font-size: 30px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
  @media screen and (max-width: 576px) {
    font-size: 22px;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }
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

  @media screen and (max-width: 768px) {
    height: 1.5rem;
  }
  @media screen and (max-width: 576px) {
    height: 1.5rem;
  }
  @media screen and (max-width: 500px) {
    height: 1.0rem;
  }

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
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 18px;
  }

  &:hover {
    color: yellow;
    transition: 0.3s;
  }
`;
