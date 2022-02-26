import React from "react";
import "./Search.css";
import { Footer, HeaderLinks, SearchInput } from "./../../components";
import { links } from "../../constants/linksData";
import { useGlobalContext, useGoogleSearch } from "../../context";
import { Navigate } from "react-router-dom";

const Search = () => {
  const { term } = useGlobalContext();
  const { data } = useGoogleSearch(term);

  return (
    <div className="search">
      <div className="search__header">
        <div className="search__header-top">
          <img src="/images/google-logo.png" alt="logo" />
          <SearchInput hideBtns />
          <div className="search__header-top-links">
            <HeaderLinks />
          </div>
        </div>
        <div className="search__header-bot">
          {links.map((item, i) => {
            const { link, Icon } = item;
            return (
              <div key={i} className="search__header-icons">
                {Icon}
                <p className="p-md">{link}</p>
              </div>
            );
          })}
        </div>
      </div>
      {term ? (
        <div className="search__results">
          <p className="search__results-count p-small">
            About {data?.searchInformation.formattedTotalResults} results in (
            {data?.searchInformation.formattedSearchTime}s) from {term}
          </p>
          {data?.items.map((item, i) => (
            <div className="search__item" key={i}>
              <a href={item.link}>{item.displayLink} ♥</a>
              <a href={item.link} className="search__item-title">
                {item.title}
              </a>
              <p>{item.snippet}</p>
            </div>
          ))}
        </div>
      ) : (
        <Navigate to="/" />
      )}
      <Footer />
    </div>
  );
};

export default Search;
