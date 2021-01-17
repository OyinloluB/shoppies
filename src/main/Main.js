import React, { useState, useEffect } from "react";
import axios from "axios";

import Styles from "./main.module.scss";

import Search from "../components/search/Search";
import Results from "../components/search-results/Results";
import Nominees from "../components/nominations/Nominees";

const Main = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(null);
  const [nominees, setNominees] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    return new Promise(async (reject) => {
      try {
        const response = await axios.get(
          `http://www.omdbapi.com/?s=${search}&apikey=59724328`
        );
        setLoading(false);
        const { data } = response;
        setResults(data.Search);
      } catch (error) {
        reject(error);
      }
    });
  }, [search]);

  useEffect(() => {
    const getNominees = localStorage.getItem("nominees");
    if (getNominees) {
      setNominees(JSON.parse(getNominees));
    }
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const addNominee = (nominee) => {
    localStorage.setItem("nominees", JSON.stringify([...nominees, nominee]));
    setNominees([...nominees, nominee]);
  };

  const removeNominee = (nominee) => {
    localStorage.setItem(
      "nominees",
      JSON.stringify(
        [...nominees].filter((item) => item.imdbID !== nominee.imdbID)
      )
    );
    setNominees([...nominees].filter((item) => item.imdbID !== nominee.imdbID));
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <h3>The shoppies</h3>
        <Search search={search} handleChange={handleChange} />
      </div>
      <div className={Styles.body}>
        <Results
          search={search}
          results={results}
          addNominee={addNominee}
          loading={loading}
        />
        <Nominees nominees={nominees} removeNominee={removeNominee} />
      </div>
    </div>
  );
};

export default Main;
