import React, { useState } from "react";
import classes from "./LanguageSelector.module.scss";
import i18next from "i18next";
import { LOCALS } from "../../../i18n/constants";

export const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("RU");

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
  };
  console.log(i18next.language);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button onClick={handleToggle} className={classes.btn_language}>
        <span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.99984 0.666626C3.94975 0.666626 0.666504 3.94987 0.666504 7.99996C0.666504 12.05 3.94975 15.3333 7.99984 15.3333C12.0499 15.3333 15.3332 12.05 15.3332 7.99996C15.3332 3.94987 12.0499 0.666626 7.99984 0.666626ZM1.67513 7.66663H4.83867C4.90552 5.64207 5.57143 4.0064 6.23399 2.86405C6.49398 2.41579 6.7543 2.04195 6.97954 1.74838C4.07377 2.21899 1.83068 4.66669 1.67513 7.66663ZM4.85522 8.66663H1.70117C1.99895 11.5131 4.18215 13.7985 6.97953 14.2515C6.7543 13.958 6.49397 13.5841 6.23399 13.1359C5.60818 12.0569 4.97939 10.5378 4.85522 8.66663ZM5.85769 8.66663H10.142C10.02 10.3195 9.46177 11.6667 8.90065 12.6342C8.58345 13.1811 8.26685 13.6038 8.03149 13.8879L7.99984 13.9258L7.96818 13.8879C7.73283 13.6038 7.41622 13.1811 7.09902 12.6342C6.53791 11.6667 5.9797 10.3195 5.85769 8.66663ZM10.1604 7.66663H5.83928C5.90557 5.86108 6.50065 4.39745 7.09902 3.36577C7.41622 2.81886 7.73283 2.39613 7.96818 2.11208L7.99984 2.07412L8.03149 2.11208C8.26685 2.39613 8.58345 2.81886 8.90065 3.36577C9.49903 4.39745 10.0941 5.86108 10.1604 7.66663ZM11.1445 8.66663C11.0203 10.5378 10.3915 12.0569 9.76569 13.1359C9.5057 13.5841 9.24538 13.958 9.02015 14.2515C11.8175 13.7985 14.0007 11.5131 14.2985 8.66663H11.1445ZM14.3245 7.66663H11.161C11.0942 5.64207 10.4282 4.0064 9.76569 2.86405C9.5057 2.41579 9.24537 2.04195 9.02013 1.74838C11.9259 2.21899 14.169 4.66669 14.3245 7.66663Z"
              fill="#EBEBEB"
            />
          </svg>
          <span>{i18next.language.toLocaleUpperCase()} </span>
        </span>

        <span className={isOpen ? classes.svgRotate : classes.svg}>
          <svg
            width="5"
            height="10"
            viewBox="0 0 5 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.26654 3.58663L1.20654 0.526625C1.08163 0.402458 0.912659 0.332764 0.736535 0.332764C0.560411 0.332764 0.391443 0.402458 0.266535 0.526625C0.204049 0.588601 0.154453 0.662335 0.120607 0.743574C0.0867616 0.824814 0.0693359 0.911951 0.0693359 0.999959C0.0693359 1.08797 0.0867616 1.1751 0.120607 1.25634C0.154453 1.33758 0.204049 1.41132 0.266535 1.47329L3.3332 4.52663C3.39569 4.5886 3.44528 4.66234 3.47913 4.74358C3.51298 4.82481 3.5304 4.91195 3.5304 4.99996C3.5304 5.08797 3.51298 5.1751 3.47913 5.25634C3.44528 5.33758 3.39569 5.41132 3.3332 5.47329L0.266535 8.52663C0.140999 8.65128 0.0701225 8.82069 0.0694974 8.9976C0.0688723 9.17451 0.13855 9.34442 0.263202 9.46996C0.387854 9.5955 0.557269 9.66637 0.734178 9.667C0.911087 9.66762 1.081 9.59795 1.20654 9.47329L4.26654 6.41329C4.64107 6.03829 4.85144 5.52996 4.85144 4.99996C4.85144 4.46996 4.64107 3.96163 4.26654 3.58663Z"
              fill="#EBEBEB"
            />
          </svg>
        </span>
      </button>

      <div
        className={isOpen ? classes.openModal : classes.closeModal}
        style={{
          position: "absolute",
          left: "0px",
          display: "flex",
          alignItems: "center",
          columnGap: "5px",
        }}
      >
        <div
          onClick={() => {
            handleSelect("RU");
            i18next.changeLanguage(LOCALS.RU);
          }}
          style={{
            padding: "4px 12px",
            color: "#fff",
            borderRadius: "40px",
            cursor: "pointer",
            backgroundColor: selectedLanguage === "RU" ? "#333" : "transparent",

            border: "1px solid #fff",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              selectedLanguage === "RU" ? "#333" : "transparent")
          }
        >
          RU
        </div>
        <div
          onClick={() => {
            handleSelect("EN");
            i18next.changeLanguage(LOCALS.EN);
          }}
          style={{
            padding: "4px 12px",
            color: "#fff",
            borderRadius: "40px",
            cursor: "pointer",
            border: "1px solid #fff",
            backgroundColor: selectedLanguage === "EN" ? "#333" : "transparent",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#333")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor =
              selectedLanguage === "EN" ? "#333" : "transparent")
          }
        >
          EN
        </div>
      </div>
    </div>
  );
};
