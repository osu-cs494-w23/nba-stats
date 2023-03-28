import React from "react";
import { useSelector } from "react-redux";
import PlayerSelector from "./player/PlayerSelector";
import PlayerList from "./player/PlayerList";
import PlayerTable from "./player/PlayerTable";
import BarChart from "./charts/BarChart";



export default function HomePage() {
  const state = useSelector((state) => state);
  return (
    <section
      className="min-h-screen bg-cover"
    >
      {state.searchResult.length === 0 && state.playerList.length === 0 && (
        <div className="text-blue-400 p-3">
          <p className="text-center">
            *Search and add NBA players to begin comparing season averages
          </p>
        </div>
      )}
      <div className="container mx-auto pt-12 text-cream">
        <PlayerSelector />
        <PlayerList />
        <PlayerTable />
        <BarChart />
      </div>
    </section>
  );
}