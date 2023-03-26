// sets texts in the search bar.
export const changeSearch = (text) => {
    return (dispatch) => {
      dispatch({
        type: "CHANGE",
        payload: text,
      });
    };
  };

 
  export const setSearchResults = (arrayOfResults) => {
    return (dispatch) => {
      dispatch({
        type: "SET_RESULTS",
        payload: arrayOfResults,
      });
    };
  };
  
  // Function that clears the resultArray
  export const clearSearchResults = () => {
    return (dispatch) => {
      dispatch({
        type: "DELETE_RESULTS",
        payload: [],
      });
    };
  };

  export const addToPlayerList = (player) => {
    return (dispatch) => {
      dispatch({
        type: "ADD_PLAYER",
        payload: player,
      });
    };
  };
  

  export const removePlayerFromList = (uuid) => {
    return (dispatch) => {
      dispatch({
        type: "REMOVE_PLAYER",
        payload: uuid,
      });
    };
  };
  
  export const updatePlayerStatsBySeason = (player) => {
    return (dispatch) => {
      dispatch({
        type: "UPDATE_STATS",
        payload: player,
      });
    };
  };
  
  export const sortPlayerListByStat = (metric) => {
    return (dispatch) => {
      dispatch({
        type: "SORT_BY_STAT",
        payload: metric,
      });
    };
  };