import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";

const Search = ({ search, handleChange }) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <Toolbar>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            name="search"
            value={search}
            onChange={handleChange}
            classes={{
              input: classes.inputInput,
              root: classes.inputRoot,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
      </Toolbar>
    </div>
  );
};

export default Search;

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    fontFamily: "Mulish",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "white",
    margin: "3vh 0vh 3vh",
    width: "100%",
    boxShadow: "7px 7px 19px #ebebeb, -7px -7px 19px #fafafa",
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputInput: {
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    width: "100%",
    padding: "20px",
  },
  inputRoot: {
    width: "100%",
  },
}));
