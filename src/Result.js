import React from "react";

function Result(props){
   const link=`https://source.unsplash.com/random/600x400/?${props.name}`;
    return(
        <>
           <img src={link} alt="search" />
        
        </>


    );



}
export default Result;