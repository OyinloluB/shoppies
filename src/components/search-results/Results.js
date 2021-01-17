import React, { useEffect, useState } from "react";
import { CircularProgress } from "@material-ui/core";

import Styles from "./results.module.scss";

const Results = ({ search, results, loading, addNominee }) => {
  const [currentNominees, setCurrentNominees] = useState(null);

  useEffect(() => {
    let getNominees = localStorage.getItem("nominees");
    setCurrentNominees(JSON.parse(getNominees));
  }, []);

  return (
    <>
      {loading === true ? (
        <div className={Styles.loading}>
          <CircularProgress />
        </div>
      ) : (
        <>
          {search !== "" ? (
            <div className={Styles.container}>
              <div>
                <p>Showing results for "{search}"</p>
              </div>
              {results?.map((result) => {
                let isNominee;
                currentNominees?.map((currentNominee) => {
                  if (currentNominee.imdbID === result.imdbID) {
                    isNominee = currentNominee.imdbID;
                  }
                });

                return (
                  <div className={Styles.result} key={result.imdbID}>
                    <div>
                      <div className={Styles.result_title}>{result.Title}</div>
                      <div className={Styles.result_year}>{result.Year}</div>
                    </div>
                    <div>
                      <button
                        disabled={isNominee === result.imdbID ? true : false}
                        className={Styles.result_button}
                        onClick={() => addNominee(result)}
                      >
                        Nominate
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Search for your favourite movie</p>
          )}
        </>
      )}
    </>
  );
};

export default Results;
