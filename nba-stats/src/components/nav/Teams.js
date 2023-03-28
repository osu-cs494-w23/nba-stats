import React from "react";
import { axiosInstance } from "../../axiosInstance";
import axios from 'axios';
import { v4 as uuidv4 } from "uuid";
import { render } from "@testing-library/react";

export default function Teams() {
  axios.get('https://www.balldontlie.io/api/v1/teams')
  .then(response => {
      // Handle response
      console.log(response.data);
  })
  .catch(err => {
      // Handle errors
      console.error(err);
  });

  const getTeams = async ()=> {
    let emptyStats = {
      data: [
        {
          full_name: ""
        },
      ],
    }
  }
    
    return (
      <section
        className="flex flex-col justify-center items-center pb-4 "
      >
        <div className="text-black min-w-400 grid-cols-4 p-5">
            {/* <ul className="list-disc"> */}
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Atlanta Hawks</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Boston Celtics</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Brooklyn Nets</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Charlotte Hornets</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Chicago Bulls</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Cleveland Cavaliers</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Dallas Mavericks</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Denver Nuggets</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Detroit Pistons</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Golden State Warriors</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Houston Rockets</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Indiana Pacers</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Los Angeles Clippers</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Los Angeles Lakers</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Memphis Grizzlies</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Miami Heat</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Milwaukee Bucks</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Minnesota Timberwolves</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">New Orleans Pelicans</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">New York Knicks</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Oklahoma City Thunder</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Philadelphia 76ers</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Phoenix Suns</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Portland Trail Blazers</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Sacramento Kings</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">San Antonio Spurs</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Toronto Raptors</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Utah Jazz</button>
            <button className=" rounded-sm border-2 border-orange-400 p-3 my-px m-3">Washington Wizards</button>
            
            {/* </ul> */}
          
        </div>
      </section>
    );
  }

