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
padding: 5px 5px 5px 5px ;
background-color: black;

@media screen and (max-width:400px){
  padding: 2px 2px 2px 2px ;
}
`
export const NavElements = styled.h2`
display: flex;
padding-top: 7px;
padding-bottom: 7px;
padding-right: 4px;
`
export const NavBrand = styled(Link)`
  font-size: 25px;
  font-weight: 400;
  text-decoration: none;
  display: flex;
  align-items: center; 
  padding: 10px 10px 10px 10px ;
  gap: 0.15rem;

  @media screen and (max-width: 768px){
    font-size: 20px;
  }

  @media screen and (max-width: 576px){
    font-size: 20px;
  }

  @media screen and (max-width:400px){
  font-size: 18px;
}

`
export const FormNav = styled.form`
display:flex;
  
`
export const NavInput = styled.input`
  padding: 7px 7px 7px 7px;
  outline: none;
  border: none;
  border-top-left-radius: 20px ;
  border-bottom-left-radius: 20px;
  width: 230px;
  height: auto;
  font-size: 15px;
  @media screen and (max-width: 768px){
    width: 200px;
    height: 35px;
  }
@media screen and (max-width: 576px){
  width: 200px;
  height: 35px;
  }
  @media screen and (max-width:400px){
    width: 185px;
    height: 30px;
  }
`

export const NavButton = styled.button`
background-color: rgb(233, 219, 29);;
padding: 10px 10px 10px 10px;
color: black;
border: none;
border-top-right-radius: 20px ;
border-bottom-right-radius: 20px;
@media screen and (max-width: 768px){
  padding: 6px 6px 6px 6px;
  }
@media screen and (max-width: 576px){
  padding: 6px 6px 6px 6px;
  }
  @media screen and (max-width:400px){
    padding: 2px 2px 2px 2px;
  }
`