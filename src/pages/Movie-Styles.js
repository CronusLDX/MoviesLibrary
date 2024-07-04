import styled from "styled-components";

export const Container = styled.section`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 100%;
 flex-direction: column;
`

export const ContainerContent = styled.section`
  display: flex;
  flex-direction: column;
 align-items: center;
 justify-content: center;
 padding-top: 20px;
 padding-bottom: 20px;
 width: 50%;
 height: 50%;
 background-color: black;
 margin-bottom: 30px;
 margin-top: 30px;
 color: white;
 border-radius: 7px;
 border: 1px solid yellow;

 @media screen and (max-width: 768px){
  width: 75%;
 }
 @media screen and (max-width: 768px){
  width: 85%;
 }
`

export const MovieTagline = styled.p`
padding-top: 20px;
padding-bottom: 10px;
font-size: 35px;
`

export const Info = styled.div`
text-align: center;
padding-top:20px;
padding-bottom: 20px;
padding-left: 10px;
padding-right: 10px;
`

export const TitleDescription = styled.h3`
padding: 8px 8px 8px 8px;
font-weight: 400;
font-size: 30px;
text-align: center;
`
export const Description = styled.p`
font-size: 23px;
font-weight: 400;
text-align: center;
padding-top: 15px;
padding-right: 15px;
padding-left: 15px;
`