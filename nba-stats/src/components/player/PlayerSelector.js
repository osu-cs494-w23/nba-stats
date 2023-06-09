import React from "react";
import { v4 as uuidv4 } from "uuid";
import { axiosInstance } from "../../axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";


export default function PlayerSelector() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const {
   
    setSearchResults,
    addToPlayerList,
  } = bindActionCreators(actionCreators, dispatch);

  const handlePageChange = async (page) => {
    // Axios request that gets data based on the page of results.
    window.scrollTo(0, 0);
    await axiosInstance
      .get(`players?search=${state.search}&page=${page}&per_page=10`)
      .then((res) => {
        setSearchResults(res.data);
      });
  };

  const getPlayerSeasonalAverages = async (player, season) => {
    let emptyStats = {
      data: [
        {
          games_played: 0,
          min: 0,
          fgm: 0,
          fga: 0,
          fg3m: 0,
          fg3a: 0,
          ftm: 0,
          fta: 0,
          oreb: 0,
          dreb: 0,
          reb: 0,
          ast: 0,
          stl: 0,
          blk: 0,
          turnover: 0,
          pf: 0,
          pts: 0,
          fg_pct: 0,
          fg3_pct: 0,
          ft_pct: 0,
        },
      ],
    };

    if (!season) {
      await axiosInstance
        .get(`/season_averages?player_ids[]=${player.id}`)
        .then((res) => {
          player.uuid = uuidv4();
          // if statement checks to see if the api has stats. If not we fill in with 0s.
          // this makes data manipulation easier for later in the project.
          if (res.data.data.length === 0) {
            player.stats = emptyStats;
          } else {
            player.stats = res.data;
          }

          player.season = 2022;
          addToPlayerList(player);
        });
    }
    if (season) {
      await axiosInstance
        .get(`/season_averages?season=[]${season}&player_ids[]=${player.id}`)
        .then((res) => {
          return res.data;
        });
    }
  };

  return (
    <div>
      {state.searchResult && state.searchResult.data && (
        <div className="p-4 text-center text-2xl font-bold border-b-2 border-cream md:w-1/2 md:mx-auto">
          Click or tap a player name to see their stats
        </div>
      )}
      <div className="flex flex-wrap justify-center overflow-y-auto  md:h-auto mt-4">
        {state.searchResult &&
          state.searchResult.data &&
          state.searchResult.data.map((player) => {
            return (
              <div
                key={player.id}
                className="border rounded p-2 m-2 cursor-pointer hover:border-darkest text-lg "
                style={{
                
                }}
                onClick={() => {
                  getPlayerSeasonalAverages(player);
                }}
              >
                <div className="bg-darkest bg-opacity-50 rounded">
                  {player.first_name} {player.last_name}
                </div>
              </div>
            );
          })}
      </div>

      {state.searchResult &&
        state.searchResult.meta &&
        state.searchResult.data.length > 0 &&
        state.searchResult.meta.total_pages !== 1 && (
          <div className="flex justify-center items-center pt-4">
            <div
              className="border p-2 rounded cursor-pointer hover:bg-deepcyan hover:border-darkest"
              onClick={() => {
                handlePageChange(1);
              }}
            >
              1
            </div>
            {state.searchResult.meta.next_page && (
              <div className="flex">
                {state.searchResult.meta.current_page !== 1 &&
                  state.searchResult.meta.current_page !== 2 && (
                    <div
                      className="border p-2 rounded cursor-pointer hover:bg-deepcyan hover:border-darkest"
                      onClick={() => {
                        handlePageChange(state.searchResult.meta.next_page - 2);
                      }}
                    >
                      {state.searchResult.meta.next_page - 2}
                    </div>
                  )}

                {state.searchResult.meta.current_page !== 1 && (
                  <div className="border p-2 rounded font-extrabold underline ">
                    {state.searchResult.meta.current_page}
                  </div>
                )}

                <div
                  className="border p-2 rounded cursor-pointer hover:bg-deepcyan hover:border-darkest"
                  onClick={() => {
                    handlePageChange(state.searchResult.meta.next_page);
                  }}
                >
                  {state.searchResult.meta.next_page}
                </div>
              </div>
            )}
            {!state.searchResult.meta.next_page && (
              <div className="flex">
                <div
                  className="border p-2 rounded cursor-pointer hover:bg-deepcyan hover:border-darkest"
                  onClick={() => {
                    handlePageChange(state.searchResult.meta.current_page - 1);
                  }}
                >
                  {state.searchResult.meta.current_page - 1}
                </div>
                <div className="border p-2 rounded cursor-pointer underline font-extrabold ">
                  {state.searchResult.meta.current_page}
                </div>
              </div>
            )}
          </div>
        )}
      {state.searchResult.data && state.searchResult.data.length > 0 && (
        <div className="flex justify-center py-4 px-12 md:px-24">
         
        </div>
      )}
    </div>
  );
        }