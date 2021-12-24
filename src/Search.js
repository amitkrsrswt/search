import React, { useState } from "react";
import Result from "./Result";
import "./Search.css";


function Search(){
    const [img,setimg]=useState("");
     
    function inputsearch(event){
        console.log(event.target.value);
        setimg(event.target.value);
    }


    Result(
        <div className="search_bar">
             <input type="text" value={img} placeholder="type here" onClick={inputsearch} />

            {img==="" ? null : <Result name={img}/> }

        </div>


    );
}
export default  Search;