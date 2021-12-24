import React from "react";
import { useParams,useLocation,useNavigate  } from "react-router-dom";
  
function User(){
     const {name}=useParams();
     const location=useLocation()
     const history=useNavigate();
     console.log(history);
     function navigator(){
        history(-1);   
     }
    return(
        <>
            <h2>this is {name}</h2>
            <h2>this is {location.pathname}</h2>
            <button  onClick={navigator}>navigate</button>

        </>
    );
}

export default User;
  
