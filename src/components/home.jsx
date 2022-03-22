import React from 'react';
import { useNavigate } from "react-router-dom";

function Home () {
    let navigate = useNavigate(); 
     
      return (
          <div>
          <h1>HOME</h1>
          <button onClick={() => {navigate("/profile") }}> go to Profile </button> 
          </div>    
      )       
    };

export default Home;