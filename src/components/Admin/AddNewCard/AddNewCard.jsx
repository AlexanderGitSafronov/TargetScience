import React, { useContext, useState, useEffect } from "react";
import classes from "./AddNewCard.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import MenuItem from "@mui/material/MenuItem";
import { NotyfyContext } from "../../../page/AdminPanel/AdminPanel";

export const AddNewCard = ({ addCard, currencies }) => {
  const [tagInputRu, setTagInputRu] = useState("");
  const [tagInputEn, setTagInputEn] = useState("");

  const notifyContext = useContext(NotyfyContext);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    formik.validateForm();
  };

  const handleClose = () => {
    setOpen(false);
    setTimeout(() => {
      formik.resetForm();
    }, 0);
  };
  const addTags = () => {
    const newTagRu = tagInputRu.split(",").map((tag) => tag.trim());
    const newTagEn = tagInputEn.split(",").map((tag) => tag.trim());

    if (newTagRu && newTagEn) {
      formik.setFieldValue("tags.ru", ...formik.values.tags.ru, newTagRu);
      formik.setFieldValue("tags.en", ...formik.values.tags.en, newTagEn);
      setTagInputRu("");
      setTagInputEn("");
    }
  };

  const formik = useFormik({
    initialValues: {
      id: "",
      tags: {
        ru: [],
        en: [],
      },
      title: {
        ru: "",
        en: "",
      },
      description: {
        ru: "",
        en: "",
      },
      figure: "",
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
    validateOnMount: true,
    onSubmit: (values) => {
      console.log("Submitted Values:", values);

      formik.resetForm();
      const cardWithId = {
        ...values,
        id: Math.floor(Math.random() * 1000000),
      };
      addCard(cardWithId);
    },
  });

  const [itemsPerPage, setItemsPerPage] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 540) {
        setItemsPerPage(true);
      } else {
        setItemsPerPage(false);
      }
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={classes.wrapper}>
      <Button
        className={classes.btn_newCard}
        variant="outlined"
        onClick={handleClickOpen}
      >
        {itemsPerPage ? "+" : "Добавить новую карточку"}
      </Button>
      <Dialog
        className={classes.wrapper__dialog}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <form className={classes.form} onSubmit={formik.handleSubmit}>
          <div className={classes.title}>
            <h2>Добавить карточку</h2>
          </div>
          <div className={classes.form__inputs}>
            <TextField
              label="Теги на русском"
              value={tagInputRu}
              onChange={(e) => setTagInputRu(e.target.value)}
            />

            <TextField
              label="Теги на английском"
              value={tagInputEn}
              onChange={(e) => setTagInputEn(e.target.value)}
            />

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
              value={formik.values["title.ru"]}
            />

            {formik.touched["title.ru"] && formik.errors["title.ru"] ? (
              <div className={classes.error}>{formik.errors["title.ru"]}</div>
            ) : null}

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
              value={formik.values["title.en"]}
            />

            {formik.touched["title.en"] && formik.errors["title.en"] ? (
              <div className={classes.error}>{formik.errors["title.en"]}</div>
            ) : null}

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
              value={formik.values["description.ru"]}
            />

            {formik.touched["description.ru"] &&
            formik.errors["description.ru"] ? (
              <div className={classes.error}>
                {formik.errors["description.ru"]}
              </div>
            ) : null}

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
              value={formik.values["description.en"]}
            />

            {formik.touched[["description.en"]] &&
            formik.errors["description.en"] ? (
              <div className={classes.error}>
                {formik.errors["description.en"]}
              </div>
            ) : null}

            <TextField
              id="outlined-select-currency"
              name="figure"
              onChange={formik.handleChange}
              value={formik.values.figure}
              select
              label="Выберите фигуру"
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

              //   helperText="Выберите фигуру"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            {formik.touched.figure && formik.errors.figure ? (
              <div className={classes.error}>{formik.errors.figure}</div>
            ) : null}
          </div>

          <DialogActions>
            <Button onClick={handleClose}>Отмена</Button>
            <Button
              disabled={!formik.isValid || formik.isSubmitting}
              type="submit"
              onClick={() => {
                addTags();
                handleClose();
              }}
              autoFocus
            >
              Добавить
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};
