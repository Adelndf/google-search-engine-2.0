import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducer from "./reducer";

export const AppContext = createContext();

export const initialState = {
  term: null,
};

export const AppProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [{ term }, dispatch] = useReducer(reducer, initialState);

  const startNewSearch = () => {
    dispatch({ type: "SET_SEARCH_TERM", term: input });
  };

  return (
    <AppContext.Provider value={{ input, setInput, startNewSearch, term }}>
      {children}
    </AppContext.Provider>
  );
};

// Create a hook
export const useGlobalContext = () => useContext(AppContext);

// Custom hook
export const useGoogleSearch = (term) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  const SEARCH_ID = process.env.REACT_APP_SEARCH_ID;

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ID}&q=${term}`
        );
        const resData = await res.json();
        setData(resData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [term]);

  return { data };
};
