import React from "react";
import './cabecalho.css';

export default function Cabecalho(){
    return(
        <div className="d-flex align-items-center p-3 my-3 text-white bg-purple rounded shadow-sm">
            <div className="lh-1">
            <h1 className="h6 mb-0 text-white lh-1">CCB</h1>
            <small>Jd. Cacique</small>
            </div>
        </div>
    )
}