import React from "react";

import OutlinedInput from "@mui/material/OutlinedInput";

export const ModalInput = ({
  placeholderText,
  nameId,
  change,
  val,
  error,
  blur,
  validateOnInput,
  onFocus,
  touched,
}) => {
  const isActive = touched || val || error;
  const isValid = !error && val;
  return (
    <div>
      <OutlinedInput
        name={nameId}
        onChange={(e) => {
          change(e);
          validateOnInput(e);
        }}
        value={val}
        id="outlined-adornment-weight"
        placeholder={placeholderText}
        fullWidth
        aria-describedby="outlined-weight-helper-text"
        onBlur={blur}
        onFocus={onFocus}
        error={error}
        sx={{
          backgroundColor: "#222222",
          borderRadius: "16px",
          color: "#fff",
          fontSize: "16px",
          marginTop: isActive ? "15px" : "0px",
          transition: "margin-top 0.3s ease, border-color 0.3s ease",
          borderColor: isValid ? "#05FD88" : "rgba(235, 235, 235, 0.2)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: error
              ? "#E3331F"
              : isValid
              ? "#05FD88"
              : "rgba(235, 235, 235, 0.2)",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: error ? "#E3331F" : "#fff",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: error ? "#E3331F" : "#03fd88",
            borderWidth: "1px",
          },
          "& .MuiInputBase-input::placeholder": {
            color: "#9D9D9D",
            opacity: isActive || error ? 0 : 1,
            transition: "opacity 0.3s ease",
          },
        }}
      />
    </div>
  );
};
