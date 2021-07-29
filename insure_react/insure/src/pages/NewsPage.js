import React, { useState } from "react";
import axios from "axios";
import NewsHeader from "../components/NewsHeader";
import NewsList from "../components/NewsList";

const NewsPage = () => {
  const [searchInput, setsearchInput] = useState("삼성");
  const [searchResultList, setSearchResultList] = useState([]);
  const getData = () => {
    let newsApi = `https://newsapi.org/v2/everything?from=2021-06-29&sortBy=publishedAt&apiKey=78bc6ddd8cdb48ceac76f5f9b9dfc4c5&language=ko&q=${searchInput}`;
    axios.get(newsApi).then(function ({ data }) {
      const newsData = data;
      console.log(newsData);
      setSearchResultList(newsData.articles);
    });
  };

  const handleSearchInput = (e) => {
    const { value } = e.target;
    console.log("사용자 입력값 : ", value);
    setsearchInput(value);
  };

  return (
    <div>
      <NewsHeader></NewsHeader>
      <input onChange={handleSearchInput}></input>
      <button onClick={getData}>검색</button>
      <NewsList newsData={searchResultList}></NewsList>
    </div>
  );
};

export default NewsPage;