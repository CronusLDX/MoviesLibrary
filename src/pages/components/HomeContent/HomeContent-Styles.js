import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`

export const Title = styled.h2`
font-size: 32px;
font-weight: 400;
margin-top: 30px;
color: rgb(233, 219, 29);

@media screen and (max-width:768px){
  font-size: 28px;
}
@media screen and (max-width:576px){
  font-size: 22px;
}
`

export const MoviesContainer = styled.section`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-template-rows: auto;
justify-content: center;
align-items: center;
text-align: center;
grid-gap: 2rem;
margin-top: 60px;
margin-bottom: 20px;

@media screen and (max-width: 768px){
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
}
@media screen and (max-width: 576px){
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
}

`

export const Loading = styled.h1`
  text-align: center;
 align-items: center;
 justify-content: center;
 margin: 140px auto;

  font-size: 60px;
  color: white;
`


