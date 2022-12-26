import React from 'react';
import "./homepage.css"
import Main_Header from "../../components/main-header/main-header";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import { Context } from '../../context/context';
import { useContext } from 'react';

export default function Homepage() {
  const navigate = useNavigate();
  const {getUser}= useContext(Context);
  useEffect(()=>{
    getUser();
  } , [])

  function handleLogout(){
    navigate("/", {replace: true})
    localStorage.clear();
  }
  function Side_Navbar(){
    return(
      <div className='side-navbar'>
        <div>
          <i className="fa-solid fa-house"></i>
        </div>
        <div>
          <i className="fa-solid fa-circle-plus"></i>
        </div>
        <div>
          <i className="fa-solid fa-list"></i>
        </div>
        <div className="logout-btn" onClick={handleLogout}>
          <i className="fa-solid fa-right-from-bracket"></i>
        </div>
      </div>
    )
  }
  return (
    <>
      <Main_Header />
      <Side_Navbar />
      <Footer />
    </>
  )
}