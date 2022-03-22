import React from 'react';
import { useNavigate, useParams } from "react-router-dom";

function Profile () {
    let navigate = useNavigate(); //button 사용하기 위해 생성
    let { username } = useParams(); //param 이용하기 위해 생성
     
      return (
          <div>
             profile of {username} 
             <br />
          <button onClick={() => {navigate("/") }}> go to Home </button> 
          </div>    
      )       
    };

export default Profile;