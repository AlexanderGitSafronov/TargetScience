import React, { useState, useEffect, useRef, useContext } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import Fade from "@mui/material/Fade";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import classes from "./Card.module.scss";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { NotyfyContext } from "../../../page/AdminPanel/AdminPanel";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

export const Card = ({
  titleE,
  descriptionN,
  id,
  tags,
  deleteTask,
  figure,
  figures,
  onUpdateCard,
  currencies,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const notifyContext = useContext(NotyfyContext);
  const [tagInputRu, setTagInputRu] = useState(tags.ru);
  const [tagInputEn, setTagInputEn] = useState(tags.en);

  const addTags = () => {
    setTagInputRu((prev) => {
      if (typeof prev === "string") {
        return prev.split(",").map((tag) => tag.trim());
      }
      return prev;
    });
    setTagInputEn((prev) => {
      if (typeof prev === "string") {
        return prev.split(",").map((tag) => tag.trim());
      }
      return prev;
    });
  };

  const inputTitleRef = useRef();
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: id,
      tags: {
        ru: tagInputRu,
        en: tagInputEn,
      },
      title: {
        ru: titleE.ru ?? "",
        en: titleE.en ?? "",
      },
      description: {
        ru: descriptionN.ru ?? "",
        en: descriptionN.en ?? "",
      },
      figure: figure ?? "",
    },
    validationSchema: Yup.object({
      title: Yup.object({
        ru: Yup.string().required("Заголовок на русском обязателен"),
        en: Yup.string().required("Заголовок на английском обязателен"),
      }),
      description: Yup.object({
        ru: Yup.string().required("Описание на русском обязательно"),
        en: Yup.string().required("Описание на английском обязательно"),
      }),
      figure: Yup.string().required("Фигура обязательна"),
    }),
    onSubmit: (values) => {
      onUpdateCard(values);
      onResetTask();
    },
  });

  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
    notifyContext.showNotification({
      text: "Карточка удалена!",
      time: 2000,
      type: "info",
    });
  };

  useEffect(() => {
    if (isEdit) inputTitleRef?.current?.focus();
  }, [isEdit]);

  function onResetTask() {
    setIsEdit(!isEdit);
    notifyContext.showNotification({
      text: `Карточка обновлена!`,
      time: 2000,
      type: "info",
    });
  }

  return (
    <Fade in>
      <div className={classes.card__wrapper}>
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <div className={classes.text__block}>
            <div className={classes.title}>
              {isEdit ? (
                <TextField
                  inputRef={inputTitleRef}
                  id="outlined-basic"
                  label="Теги на Русском"
                  variant="outlined"
                  name="tags.ru"
                  error={
                    formik.touched["tags.ru"] && formik.errors["tags.ru"]
                      ? true
                      : false
                  }
                  onChange={(e) => setTagInputRu(e.target.value)}
                  value={tagInputRu}
                  style={{ paddingTop: "10px" }}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      paddingTop: "0px",
                    },
                    "& .MuiInputLabel-root": {
                      marginTop: "10px",
                    },
                  }}
                />
              ) : (
                <div style={{ display: "flex", columnGap: "10px" }}>
                  {tags.ru.map((value, index, array) => {
                    return <div>{value}</div>;
                  })}
                </div>
              )}
            </div>

            <div className={classes.title}>
              {isEdit ? (
                <TextField
                  id="outlined-basic"
                  label="Теги на Английском"
                  variant="outlined"
                  name="tags.en"
                  error={
                    formik.touched["tags.en"] && formik.errors["tags.en"]
                      ? true
                      : false
                  }
                  onChange={(e) => setTagInputEn(e.target.value)}
                  value={tagInputEn}
                  style={{ paddingTop: "10px" }}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      paddingTop: "0px",
                    },
                    "& .MuiInputLabel-root": {
                      marginTop: "10px",
                    },
                  }}
                />
              ) : null}
            </div>

            <div className={classes.title}>
              {isEdit ? (
                <TextField
                  id="outlined-basic"
                  label="Заголовок на Русском"
                  variant="outlined"
                  name="title.ru"
                  error={
                    formik.touched["title.ru"] && formik.errors["title.ru"]
                      ? true
                      : false
                  }
                  onChange={formik.handleChange}
                  value={formik.values.title.ru}
                  style={{ paddingTop: "10px" }}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      paddingTop: "0px", // Оболочка
                    },
                    "& .MuiInputLabel-root": {
                      marginTop: "10px",
                    },
                  }}
                />
              ) : (
                titleE.ru
              )}
            </div>

            <div className={classes.title}>
              {isEdit ? (
                <TextField
                  id="outlined-basic"
                  label="Заголовок на Английском"
                  variant="outlined"
                  name="title.en"
                  error={
                    formik.touched["title.en"] && formik.errors["title.en"]
                      ? true
                      : false
                  }
                  onChange={formik.handleChange}
                  value={formik.values.title.en}
                  style={{ paddingTop: "10px" }}
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      paddingTop: "0px",
                    },
                    "& .MuiInputLabel-root": {
                      marginTop: "10px",
                    },
                  }}
                />
              ) : null}
            </div>

            <div className={classes.description}>
              {isEdit ? (
                <TextField
                  className={classes.taxterea}
                  id="outlined-multiline-static"
                  label="Описание на Русском"
                  multiline
                  rows={4}
                  name="description.ru"
                  error={
                    formik.touched["description.ru"] &&
                    formik.errors["description.ru"]
                      ? true
                      : false
                  }
                  onChange={formik.handleChange}
                  value={formik.values.description.ru}
                  style={{ paddingTop: "10px" }}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                    "& .MuiOutlinedInput-root": {
                      paddingTop: "10px",
                    },
                    "& .MuiInputLabel-root": {
                      marginTop: "10px",
                    },
                  }}
                />
              ) : (
                descriptionN.ru
              )}
            </div>

            <div className={classes.description}>
              {isEdit ? (
                <TextField
                  className={classes.taxterea}
                  id="outlined-multiline-static"
                  label="Описание на Английском"
                  multiline
                  rows={4}
                  name="description.en"
                  error={
                    formik.touched["description.en"] &&
                    formik.errors["description.en"]
                      ? true
                      : false
                  }
                  onChange={formik.handleChange}
                  value={formik.values.description.en}
                  style={{ paddingTop: "10px" }}
                  sx={{
                    width: "100%",
                    "& .MuiInputBase-root": {
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                    },
                    "& .MuiOutlinedInput-root": {
                      paddingTop: "10px", // Оболочка
                    },
                    "& .MuiInputLabel-root": {
                      marginTop: "10px",
                    },
                  }}
                />
              ) : null}
            </div>

            <div className={classes.figure}>
              {" "}
              {isEdit ? (
                <TextField
                  id="outlined-select-currency"
                  name="figure"
                  onChange={formik.handleChange}
                  value={formik.values.figure}
                  select
                  label="Фигура"
                  SelectProps={{
                    MenuProps: {
                      PaperProps: {
                        style: {
                          maxHeight: 200,
                          overflow: "auto",
                        },
                      },
                    },
                  }}
                  sx={{
                    width: "100%",
                    "& .MuiSelect-icon": {
                      color: "#fff", // Изменить цвет стрелочки
                    },
                    "& .MuiOutlinedInput-root": {
                      paddingTop: "0px", // Оболочка
                    },
                    "& .MuiInputLabel-root": {
                      marginTop: "10px",
                    },
                  }}
                  style={{ paddingTop: "10px" }}
                  //   helperText="Выберите фигуру"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              ) : (
                <img src={figures[figure]} alt="" />
              )}{" "}
            </div>
          </div>
          <div className={classes.btn__block}>
            {isEdit ? (
              <Button
                onClick={addTags}
                className={classes.btn__block_save}
                type="submit"
              >
                {" "}
                <CheckIcon />{" "}
              </Button>
            ) : (
              <Button
                className={classes.btn__block_edit}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setIsEdit(!isEdit);
                }}
              >
                {" "}
                <EditIcon />{" "}
              </Button>
            )}

            <Button
              type="button"
              className={classes.btn__block_delite}
              onClick={handleClickOpen}
            >
              <DeleteIcon />
            </Button>
          </div>
        </form>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <div className={classes.title__dialog}>
            <h3>Удалить задачу?</h3>
          </div>
          <DialogActions>
            <Button onClick={handleCloseModal}>Отмена</Button>
            <Button
              onClick={() => {
                deleteTask(id);
                handleClose();
              }}
              autoFocus
            >
              Удалить
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Fade>
  );
};
