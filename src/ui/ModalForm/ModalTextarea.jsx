import React from "react";
import TextField from "@mui/material/TextField";
import { useTranslation } from "react-i18next";
export const ModalTextarea = ({
  nameId,
  change,
  val,
  error,
  blur,
  validateOnInput,
  onFocus,
  touched,
}) => {
  const { t } = useTranslation();
  const isActive = touched || val || error;
  const isValid = !error && val;
  return (
    <div>
      <TextField
        name={nameId}
        onChange={(e) => {
          change(e);
          validateOnInput(e);
        }}
        value={val}
        id="outlined-multiline-static"
        placeholder={t("form.description")}
        multiline
        rows={5}
        fullWidth
        onBlur={blur}
        onFocus={onFocus}
        error={error}
        sx={{
          marginTop: isActive ? "15px" : "0px",
          transition: "margin-top 0.3s ease, border-color 0.3s ease",
          borderColor: isValid ? "#05FD88" : "rgba(235, 235, 235, 0.2)",

          "& .MuiOutlinedInput-root.Mui-focused": {
            "& fieldset": {
              borderColor: error ? "#E3331F" : "#03fd88",
              borderWidth: "1px",
            },
          },

          "& .MuiOutlinedInput-root": {
            backgroundColor: "#222222",
            borderRadius: "16px",
            color: "#fff",
          },

          "&:hover .MuiOutlinedInput-root fieldset": {
            borderColor: error ? "#E3331F" : isValid ? "#05FD88" : "#fff",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: error
              ? "#E3331F"
              : isValid
              ? "#05FD88"
              : "rgba(235, 235, 235, 0.2)",
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
