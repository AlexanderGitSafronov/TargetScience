import React, { useState, useEffect } from "react";

import classes from "./Search.module.scss";
import TextField from "@mui/material/TextField";
export const Search = ({ setSearchGlobal }) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (searchText) {
      setSearchGlobal(searchText);
      return;
    }
    if (!searchText) {
      setSearchGlobal("");
      return;
    }
  }, [searchText]);
  return (
    <div className={classes.wrapper__search}>
      <TextField
        sx={{
          "& .MuiInput-underline:before": {
            borderBottomColor: "#ab2c1e",
          },
          "& .MuiInput-underline:hover:before": {
            borderBottomColor: "#ab2c1e",
          },
          "& .MuiInput-underline:after": {
            borderBottomColor: "#fff",
          },
          "& .MuiInputBase-input": {
            color: "#fff",
          },
        }}
        id="standard-basic"
        label="Поиск"
        variant="standard"
        value={searchText}
        onInput={(e) => setSearchText(e.target.value)}
      />
    </div>
  );
};
