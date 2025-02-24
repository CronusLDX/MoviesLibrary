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
  width: 86%;
 }
 @media screen and (max-width: 576px){
  width: 86%;
 }
 @media screen and (max-width: 490px){
  width: 96%;
 }
`

export const MovieTagline = styled.p`
padding-top: 20px;
padding-bottom: 15px;
font-size: 30px;
font-weight: 400;

@media screen and (max-width: 768px){
  font-size: 25px;
 }
 @media screen and (max-width: 576px){
  font-size: 18px;
 }
 @media screen and (max-width: 500px){
  font-size: 18px;
 }
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
@media screen and (max-width: 768px){
  font-size: 25px;
 }
 @media screen and (max-width: 576px){
  font-size: 22px;
 }
 @media screen and (max-width: 490px){
  font-size: 18px;
 }
`
export const Description = styled.p`
font-size: 23px;
font-weight: 400;
text-align: center;
padding-top: 15px;
padding-right: 15px;
padding-left: 15px;
@media screen and (max-width: 768px){
  font-size: 20px;
 }
 @media screen and (max-width: 576px){
  font-size: 18px;
 }
 @media screen and (max-width: 490px){
  font-size: 18px;
 }
`