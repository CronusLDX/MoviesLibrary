import React from 'react'

//Hooks
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

//Components
import {Nav,NavContainer,NavBrand,NavInput, NavElements,NavButton,FormNav} from './Navbar-styles'
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

const Navbar = () => {

    const[search,setSearch]= useState("")
    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(!search) return;

        navigate(`/search?q=${search}`,{replace : true});
        setSearch('')

    }

    const handleChange = (e)=>{
        setSearch(e.target.value)
    }
    
  return (
      <Nav>
        <NavContainer>
            <NavElements>
                <NavBrand to="/"> <BiCameraMovie size={30}/> Movie Library</NavBrand>
            </NavElements>
            <NavElements>
                <FormNav onSubmit={handleSubmit}>
                    <NavInput type="text" placeholder='Busque aqui.....' value={search} onChange={handleChange}/>
                    <NavButton type='submit'><BiSearchAlt2 size={20}/></NavButton>
                </FormNav>
                
            </NavElements>
            
        </NavContainer>
      </Nav>
  )
}

export default Navbar