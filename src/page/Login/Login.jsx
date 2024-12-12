import React, { useState } from "react";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { useFormik } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import classes from "./Login.module.scss";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: Yup.object({
      login: Yup.string()
        .min(1, "Must be 3 characters or more")
        .required("Required"),
      password: Yup.string()
        .min(1, "Must be 5 characters or more")
        .required("Required"),
    }),
    onSubmit: (values) => {
      formik.resetForm();
      console.log(values);

      if (values.login === "admin" && values.password === "12345") {
        navigate("/admin"); // Перенаправление на страницу admin
      } else {
        alert("Неправильный логин или пароль");
      }
    },
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.wrapper__form}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <div className={classes.form__inputs}>
            <div>
              <TextField
                id="outlined-basic"
                label="Логин"
                variant="outlined"
                name="login"
                fullWidth
                error={
                  formik.touched.login && formik.errors.login ? true : false
                }
                onChange={formik.handleChange}
                value={formik.values.login}
                autoComplete="new-login"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ccc",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff",
                  },
                  "& input:-webkit-autofill": {
                    WebkitBoxShadow: "0 0 0 1000px transparent inset",
                    WebkitTextFillColor: "#fff",
                    transition: "background-color 5000s ease-in-out 0s",
                  },
                  "& input:-webkit-autofill:focus": {
                    WebkitBoxShadow: "0 0 0 1000px transparent inset",
                    WebkitTextFillColor: "#fff",
                  },
                }}
              />

              {formik.touched.login && formik.errors.login ? (
                <div className={classes.error}>{formik.errors.login}</div>
              ) : null}
            </div>

            <div>
              <TextField
                type={showPassword ? "text" : "password"}
                id="outlined-basic"
                label="Пароль"
                variant="outlined"
                name="password"
                fullWidth
                error={
                  formik.touched.password && formik.errors.password
                    ? true
                    : false
                }
                onChange={formik.handleChange}
                value={formik.values.password}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                      borderColor: "#ccc",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#fff",
                    },
                  },
                  "& .MuiInputLabel-root": {
                    color: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "#fff",
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleTogglePasswordVisibility}
                        edge="end"
                      >
                        {showPassword ? (
                          <VisibilityOff sx={{ color: "#ab2c1e" }} />
                        ) : (
                          <Visibility sx={{ color: "#ab2c1e" }} />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {formik.touched.password && formik.errors.password ? (
                <div className={classes.error}>{formik.errors.password}</div>
              ) : null}
            </div>
          </div>

          <Button type="submit" className={classes.btn} variant="contained">
            Войти
          </Button>
        </form>
      </div>
    </div>
  );
};
