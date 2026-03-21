
import './nav.css'
import { IoHomeOutline } from "react-icons/io5";
import { LuUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from 'react';
const Nav = () => {
  const[activeNav,setActiveNave]=useState('#')
  return (
    <nav>
      <a href="#" className={activeNav==='#'?'active':''} onClick={()=> setActiveNave('#')}><IoHomeOutline/></a>
      <a href="#about" className={activeNav==='#about'?'active':''} onClick={()=> setActiveNave('#about')}><LuUserRound/></a>
      <a href="#projects" className={activeNav==='#projects'?'active':''}  onClick={()=> setActiveNave('#projects')}><BiBook/></a>
      <a href="#skills" className={activeNav==='#skills'?'active':''}  onClick={()=> setActiveNave('#skills')}><RiServiceLine/></a>
      <a href="#contact" className={activeNav==='#contact'?'active':''}  onClick={()=> setActiveNave('#contact')}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav