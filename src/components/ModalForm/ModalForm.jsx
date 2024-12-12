import React, { useState } from "react";
import classes from "./ModalForm.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import Slide from "@mui/material/Slide";
import { Button, Dialog, Snackbar } from "@mui/material";
import LogoForm from "../../assets/modalForm/Logo.png";
import LogoForm1 from "../../assets/modalForm/Logo1.png";
import LogoForm2 from "../../assets/modalForm/Logo2.png";
import LogoForm3 from "../../assets/modalForm/Logo3.png";
import LogoForm4 from "../../assets/modalForm/Logo4.png";
import { ModalInput } from "../../ui/ModalForm/ModalInput";
import { ModalTextarea } from "../../ui/ModalForm/ModalTextarea";
import { ModalFileField } from "../../ui/ModalForm/ModalFileField";
import { CustomSelect } from "../../ui/ModalForm/CustomSelect";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const ModalForm = ({ isOpenModal, handleClose }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      formName: "",
      formTg: "",
      nameWhatsApp: "",
      email: "",
      sel: "",
      desc: "",
      files: [],
    },
    validationSchema: Yup.object({
      formName: Yup.string()
        .min(3, t("formError.name"))
        .required(t("formError.name")),
      formTg: Yup.string()
        .min(2, t("formError.telegram"))
        .required(t("formError.telegram")),
      nameWhatsApp: Yup.string()
        .required(t("formError.watsApp"))
        .matches(/^\+?[1-9]\d{1,14}$/, t("formError.watsAppBig")),
      email: Yup.string()
        .email(t("formError.emailN"))
        .required(t("formError.email")),
      sel: Yup.string().min(1, "Выбирите услугу").required("Выбирите услугу"),
      desc: Yup.string()
        .min(1, t("formError.description"))
        .required(t("formError.description")),
      files: Yup.array().max(10, t("formError.files")),
    }),
    onSubmit: (values) => {
      console.log(values)
      formik.resetForm();
      navigate("/thank");
    },
  });

  const handleFileChange = (selectedFiles) => {
    console.log(selectedFiles);
    formik.setFieldValue("files", selectedFiles);
  };

  const handleCloseWithValidation = async () => {
    const errors = await formik.validateForm();
    if (Object.keys(errors).length > 0) {
      return;
    }

    setTimeout(() => {
      setDialogOpen(true);
    }, 100);

    setTimeout(() => {
      setDialogOpen(false);
    }, 4000);

    handleClose();
  };
  return (
    <div>
      <Dialog
        classes={{ paper: classes.modal }}
        open={isOpenModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-paper": {
            "@media (max-width: 540px)": {
              margin: "16px", // Отступы по бокам
            },
          },
        }}
      >
        <div className={classes.modal_wrapper}>
          <div className={classes.modal_wrapper_circle_container}></div>

          <div className={classes.header_modal}>
            <div className={classes.title}>
              <h3>{t("form.title")}</h3>
            </div>
          </div>
          <div className={classes.content_modal}>
            <form className={classes.form} onSubmit={formik.handleSubmit}>
              <div className={classes.form_field}>
                <div
                  className={classes.error}
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0",
                    color: formik.errors.formName ? "#E3331F" : "#05FD88",
                    opacity: formik.touched.formName ? 1 : 0,
                    transform: formik.touched.formName
                      ? "translateY(-10px)"
                      : "translateY(20px)",
                    transition:
                      "top 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: "none",
                  }}
                >
                  {formik.errors.formName
                    ? formik.errors.formName
                    : t("form.name")}{" "}
                </div>
                   
                <ModalInput
                  val={formik.values.formName}
                  change={formik.handleChange}
                  blur={formik.handleBlur}
                  validateOnInput={() => formik.validateField("formName")}
                  onFocus={() => formik.setFieldTouched("formName", true)}
                  nameId="formName"
                  placeholderText={t("form.name")}
                  touched={formik.touched.formName}
                  error={
                    formik.touched.formName && Boolean(formik.errors.formName)
                  }
                />
              </div>
              <div className={classes.form_field}>
                <div
                  className={classes.error}
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0",
                    color: formik.errors.formTg ? "#E3331F" : "#05FD88",
                    opacity: formik.touched.formTg ? 1 : 0,
                    transform: formik.touched.formTg
                      ? "translateY(-10px)"
                      : "translateY(20px)",
                    transition:
                      "top 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: "none",
                  }}
                >
                  {formik.errors.formTg
                    ? formik.errors.formTg
                    : t("form.telegram")}{" "}
                </div>
                <ModalInput
                  val={formik.values.formTg}
                  change={(e) => {
                    formik.handleChange(e);
                    formik.validateField("formTg");
                  }}
                  nameId="formTg"
                  placeholderText={t("form.telegram")}
                  blur={formik.handleBlur}
                  validateOnInput={() => formik.validateField("formTg")}
                  onFocus={() => formik.setFieldTouched("formTg", true)}
                  error={formik.touched.formTg && Boolean(formik.errors.formTg)}
                  helperText={formik.touched.formTg ? formik.errors.formTg : ""}
                />
              </div>
              <div className={classes.form_field}>
                <div
                  className={classes.error}
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0",
                    color: formik.errors.nameWhatsApp ? "#E3331F" : "#05FD88",
                    opacity: formik.touched.nameWhatsApp ? 1 : 0,
                    transform: formik.touched.nameWhatsApp
                      ? "translateY(-10px)"
                      : "translateY(20px)",
                    transition:
                      "top 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: "none",
                  }}
                >
                  {formik.errors.nameWhatsApp
                    ? formik.errors.nameWhatsApp
                    : t("form.watsApp")}{" "}
                </div>
                <ModalInput
                  val={formik.values.nameWhatsApp}
                  change={(e) => {
                    formik.handleChange(e);
                    formik.validateField("nameWhatsApp");
                  }}
                  nameId="nameWhatsApp"
                  placeholderText={t("form.watsApp")}
                  blur={formik.handleBlur}
                  validateOnInput={() => formik.validateField("nameWhatsApp")}
                  onFocus={() => formik.setFieldTouched("nameWhatsApp", true)}
                  error={
                    formik.touched.nameWhatsApp &&
                    Boolean(formik.errors.nameWhatsApp)
                  }
                  helperText={
                    formik.touched.nameWhatsApp
                      ? formik.errors.nameWhatsApp
                      : ""
                  }
                />
              </div>
              <div className={classes.form_field}>
                <div
                  className={classes.error}
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0",
                    color: formik.errors.email ? "#E3331F" : "#05FD88",
                    opacity: formik.touched.email ? 1 : 0,
                    transform: formik.touched.email
                      ? "translateY(-10px)"
                      : "translateY(20px)",
                    transition:
                      "top 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: "none",
                  }}
                >
                  {formik.errors.email ? formik.errors.email : t("form.email")}{" "}
                </div>
                <ModalInput
                  val={formik.values.email}
                  change={(e) => {
                    formik.handleChange(e);
                    formik.validateField("email");
                  }}
                  nameId="email"
                  placeholderText={t("form.email")}
                  blur={formik.handleBlur}
                  validateOnInput={() => formik.validateField("email")}
                  onFocus={() => formik.setFieldTouched("email", true)}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email ? formik.errors.email : ""}
                />
              </div>
              <div className={classes.form_field}>
                <CustomSelect
                  val={formik.values.sel}
                  change={formik.handleChange}
                  blur={formik.handleBlur}
                  validateOnInput={() => formik.validateField("sel")}
                  onFocus={() => formik.setFieldTouched("sel", true)}
                  nameId="sel"
                  touched={formik.touched.sel}
                  error={formik.touched.sel && Boolean(formik.errors.sel)}
                  helperText={formik.touched.sel ? formik.errors.sel : ""}
                />
              </div>
              <div className={classes.form_field}>
                <div
                  className={classes.error}
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0",
                    color: formik.errors.desc ? "#E3331F" : "#05FD88",
                    opacity: formik.touched.desc ? 1 : 0,
                    transform: formik.touched.desc
                      ? "translateY(-10px)"
                      : "translateY(20px)",
                    transition:
                      "top 0.3s ease, opacity 0.3s ease, transform 0.3s ease",
                    pointerEvents: "none",
                  }}
                >
                  {formik.errors.desc
                    ? formik.errors.desc
                    : t("formError.selectError")}{" "}
                </div>

                <ModalTextarea
                  val={formik.values.desc}
                  change={formik.handleChange}
                  blur={formik.handleBlur}
                  nameId="desc"
                  validateOnInput={() => formik.validateField("desc")}
                  onFocus={() => formik.setFieldTouched("desc", true)}
                  placeholderText={t("form.description")}
                  error={formik.touched.desc && Boolean(formik.errors.desc)}
                  helperText={formik.touched.desc ? formik.errors.desc : ""}
                />
              </div>

              <ModalFileField
                nameId="files"
                val={formik.values.files}
                change={(event) => handleFileChange(event)}
                blur={formik.handleBlur}
                validateOnInput={() => formik.validateField("files")}
                onFocus={() => formik.setFieldTouched("files", true)}
                error={formik.touched.files && Boolean(formik.errors.files)}
                helperText={formik.touched.files ? formik.errors.files : ""}
              />

              <button
                onClick={handleCloseWithValidation}
                type="submit"
                className={classes.send_form}
              >
                <div className={classes.send_form_content}>
                  <span>{t("formBtn.send")}</span>
                  <span>
                    <svg
                      width="24"
                      height="12"
                      viewBox="0 0 24 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.50002 5.25096H20.6888L17.4713 2.02971C17.3484 1.88624 17.2842 1.70168 17.2915 1.51292C17.2988 1.32417 17.377 1.14511 17.5106 1.01154C17.6442 0.87797 17.8232 0.79972 18.012 0.792429C18.2007 0.785139 18.3853 0.849343 18.5288 0.972213L23.0288 5.47221C23.117 5.55882 23.1831 5.66532 23.2216 5.78277C23.2601 5.90023 23.2698 6.02521 23.25 6.14721C23.2161 6.28844 23.1449 6.41796 23.0438 6.52221L18.5438 11.0222C18.4765 11.1007 18.3938 11.1645 18.3007 11.2095C18.2077 11.2545 18.1063 11.2798 18.0031 11.2838C17.8998 11.2878 17.7968 11.2704 17.7005 11.2327C17.6043 11.195 17.5169 11.1378 17.4438 11.0647C17.3707 10.9916 17.3135 10.9042 17.2758 10.808C17.2381 10.7117 17.2207 10.6087 17.2247 10.5054C17.2287 10.4021 17.254 10.3008 17.299 10.2077C17.344 10.1147 17.4078 10.0319 17.4863 9.96471L20.6888 6.75096H1.50002C1.30111 6.75096 1.11034 6.67195 0.96969 6.53129C0.829037 6.39064 0.750021 6.19988 0.750021 6.00096C0.750021 5.80205 0.829037 5.61129 0.96969 5.47063C1.11034 5.32998 1.30111 5.25096 1.50002 5.25096Z"
                        fill="#EBEBEB"
                      />
                    </svg>
                  </span>
                </div>

                <svg
                  className={classes.tl}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.998078 1H15.999V0H0.49855V0.499985L-0.00192261 0.499985V16.0005H0.998077L0.998078 1Z"
                    fill="#F5F5F5"
                  />
                </svg>
                <svg
                  className={classes.tr}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.998078 1H15.999V0H0.49855V0.499985L-0.00192261 0.499985V16.0005H0.998077L0.998078 1Z"
                    fill="#F5F5F5"
                  />
                </svg>
                <svg
                  className={classes.bl}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.998078 1H15.999V0H0.49855V0.499985L-0.00192261 0.499985V16.0005H0.998077L0.998078 1Z"
                    fill="#F5F5F5"
                  />
                </svg>
                <svg
                  className={classes.br}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.998078 1H15.999V0H0.49855V0.499985L-0.00192261 0.499985V16.0005H0.998077L0.998078 1Z"
                    fill="#F5F5F5"
                  />
                </svg>

                <span className={classes.fillEffect}></span>
              </button>
            </form>
          </div>
          <div className={classes.footer_modal}></div>

          <img className={classes.logo_bg} src={LogoForm} alt="" />
          <img className={classes.logo_bg_1} src={LogoForm1} alt="" />
          <img className={classes.logo_bg_2} src={LogoForm2} alt="" />
          <img className={classes.logo_bg_3} src={LogoForm3} alt="" />
          <img className={classes.logo_bg_4} src={LogoForm4} alt="" />
        </div>
      </Dialog>
    </div>
  );
};
