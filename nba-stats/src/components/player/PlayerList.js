import React from "react";
import { useSelector } from "react-redux";
import PlayerCard from "./PlayerCard";

export default function PlayerList() {
  const playerList = useSelector((state) => state.playerList);
  return (
    <div>
      {playerList.length > 0 && (
        <div className="flex flex-col justify-center items-center pb-4">
          <div className="flex items-center justify-around">
            <div className="text-2xl uppercase">Player List</div>
           
          </div>

          <div className="flex flex-wrap justify-center items-stretch">
            {playerList.length > 0 &&
              playerList.map((player) => {
                return <PlayerCard player={player} key={player.uuid} />;
              })}
          </div>
          <div className="flex justify-center place-items-end text-left w-full ">
            <div className="text-gray-500 text-sm p-4">
                <p>
                  * Max players to search = 3<br/>
                  * Search same player multiple times to compare different season<br/>
                  * Clicking on the team icon will remove the player from serch <br/>

                </p>      
            </div>
          </div>
        </div>
      )}
    </div>
  );
}