import React from "react";
import "./SearchInput.css";
import { useGlobalContext } from "../../context";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = ({ hideBtns = false }) => {
  const { input, setInput, startNewSearch } = useGlobalContext();

  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    navigate("/search");
    startNewSearch();
    setInput("");
  };

  return (
    <form>
      <div className="searchInput__container">
        <AiOutlineSearch />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <BsFillMicFill />
      </div>
      {!hideBtns ? (
        <div className="searchInput__btns">
          <button type="submit" onClick={search} className="searchInput__btn">
            google search
          </button>
          <button className="searchInput__btn">i'm feeling lucky</button>
        </div>
      ) : (
        <div className="searchInput__btns">
          <button
            type="submit"
            onClick={search}
            className="searchInput__btn hideBtn"
          >
            google search
          </button>
          <button className="searchInput__btn hideBtn">
            i'm feeling lucky
          </button>
        </div>
      )}
    </form>
  );
};

export default SearchInput;
