import React from "react";
import { axiosInstance } from "../../axiosInstance";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  // Sets state to all possible options.
  const state = useSelector((state) => state);
  const navigate = useNavigate();

  const dispatch = useDispatch();


  const { changeSearch, setSearchResults, clearSearchResults } =
    bindActionCreators(actionCreators, dispatch);

  // allows you to set state to just the data you need
  // const state = useSelector((state) => state.search);

  const getResults = async () => {
    await axiosInstance
      .get(`players?search=${state.search}&per_page=10`)
      .then((res) => {
        setSearchResults(res.data);
        // if statement to redirect to home page if someone is not on the homepage
        if (window.location.hash !== "#/") {
          navigate("/");
        }
      });
  };

  const handleInput = (e) => {
    // if statement will remove previous results if a user types into the search bar.
    if (state.searchResult.data) {
      clearSearchResults();
    }

    changeSearch(e.target.value);
  };

  const handleClear = () => {
    SearchBar.value="";
    clearSearchResults();
    
  };

  return (
    <div className="flex justify-start ">
      <input
        type="text"
        placeholder="Enter player name"
        className="p-4 rounded"
        value={state.search}
        onChange={(e) => {
          handleInput(e);
        }}
      />
      <button
        className="bg-dark text-red-600 p-2 sm:p-4 rounded uppercase"
        onClick={() => {
          getResults();
        }}
      >
        Search
      </button>
    </div>
  );
}