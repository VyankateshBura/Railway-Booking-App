import React from "react";
import "./Traininfo.css";
import Authbutton from "../Button/Authbutton";
const Traininfo = ({number,name,from,to,arriveTime,departTime}) => {
   
    var data = [
        {
            train_num:1249,
            name:"Mumbai CST - Ajni Maharparinirvan Divas Special (UnReserved)",
            train_from:"CSTM",
            train_to:"AJNI",
            arrivalTime:"8pm",
            departTime:"10pm"
        }
    ]

  return (
    <div>
      <div className="card my-3 mx-2 border-round">
        <h5 className="card-header">Train number : {number}</h5>
        <div className="card-body">
          <h5 className="card-title">Train name:</h5>
          <p className="card-text">
           {name}
          </p>
            <Authbutton buttonname={`Arrival time: ${arriveTime}`}/>
            <Authbutton buttonname={`Departure time: ${departTime}`}/>
        </div>
      </div>
    </div>
  );
};

export default Traininfo;
