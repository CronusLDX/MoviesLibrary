import { Link } from "react-router-dom";
import styled from "styled-components";

export const  Nav = styled.nav`
 width: 100%;
 height: 100%;
 display: flex;
`

export const NavContainer = styled.section`
width: 100%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 10px 10px 10px ;
background-color: black;
`
export const NavElements = styled.h2`
display: flex;
padding: 10px 10px 10px 10px;
`
export const NavBrand = styled(Link)`
  font-size: 30px;
  font-weight: 400;
  text-decoration: none;
  display: flex;
  align-items: center; 
  padding: 10px 10px 10px 10px ;
  gap: 0.15rem;

  @media screen and (max-width: 768px){
    font-size: 30px;
  }

  @media screen and (max-width: 576px){
    font-size: 25px;
  }

`
export const FormNav = styled.form`
display:flex;
@media screen and (max-width: 768px){
   font-size: 20px;
  }
@media screen and (max-width: 576px){
   font-size: 25px;
  }
`
export const NavInput = styled.input`
  padding: 10px 10px 10px 10px;
  outline: none;
  border: none;
  border-top-left-radius: 20px ;
  border-bottom-left-radius: 20px;
  width: 250px;
  height: 50px;
  font-size: 20px;
`

export const NavButton = styled.button`
background-color: rgb(233, 219, 29);;
padding: 10px 10px 10px 10px;
color: black;
border: none;
border-top-right-radius: 20px ;
border-bottom-right-radius: 20px;
`