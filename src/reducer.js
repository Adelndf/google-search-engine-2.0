const reducer = (state, action) => {
  console.log(action);
  if (action.type === "SET_SEARCH_TERM") {
    return {
      ...state,
      term: action.term,
    };
  }
  return state;
};

export default reducer;
