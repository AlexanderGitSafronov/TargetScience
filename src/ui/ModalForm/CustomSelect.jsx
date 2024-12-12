import React, { useState, useRef, useEffect } from "react";
import classes from "./CustomSelect.module.scss";
import { useTranslation } from "react-i18next";
export const CustomSelect = ({ nameId, change, error, val }) => {
  const { t } = useTranslation();
  const options = [
    {
      value: t("formSelect.options.design"),
      label: t("formSelect.options.design"),
    },
    {
      value: t("formSelect.options.websiteCreation"),
      label: t("formSelect.options.websiteCreation"),
    },
    {
      value: t("formSelect.options.onlineStore"),
      label: t("formSelect.options.onlineStore"),
    },
    {
      value: t("formSelect.options.branding"),
      label: t("formSelect.options.branding"),
    },
    { value: t("formSelect.options.seo"), label: t("formSelect.options.seo") },
    {
      value: t("formSelect.options.advertisement"),
      label: t("formSelect.options.advertisement"),
    },
    { value: t("formSelect.options.crm"), label: t("formSelect.options.crm") },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(val || "");
  const selectRef = useRef(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (value) => {
    setSelectedValue(value);
    change({ target: { name: nameId, value } });
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  const handleBlur = (e) => {
    if (!selectRef.current.contains(e.relatedTarget)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    setSelectedValue(val || "");
  }, [val]);

  return (
    <div
      ref={selectRef}
      style={{
        position: "relative",
        marginBottom: isOpen ? "300px" : "0px",

        border: `1px solid ${
          error
            ? "#E3331F"
            : isOpen || val
            ? "#05FD88"
            : "rgba(235, 235, 235, 0.2)"
        }`,

        borderRadius: "16px",
        backgroundColor: "#222222",
        color: "#fff",
        padding: "10px 16px",
        cursor: "pointer",
        height: "56px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        transition: " border-color 0.3s ease, margin-bottom 0.3s ease",
      }}
      tabIndex={0}
      onBlur={handleBlur}
      onClick={handleToggle}
    >
      <div style={{ color: selectedValue ? "#fff" : "#fff" }}>
        {selectedValue || t("formSelect.main")}
      </div>
      <svg
        style={{
          transform: isOpen ? "rotate(-90deg)" : "rotate(0deg)",
          transition: "transform 0.3s ease",
        }}
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6L8 10L12 6"
          stroke={
            error
              ? "#E3331F"
              : isOpen || val
              ? "#05FD88"
              : "rgba(235, 235, 235, 1)"
          }
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div
        style={{
          position: "absolute",
          top: "105%",
          left: 0,
          width: "60%",
          backgroundColor: "#222222",
          borderRadius: "16px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.5)",
          zIndex: 10,
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0)" : "translateY(-10px)",
          visibility: isOpen ? "visible" : "hidden",
          transition: "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
        }}
      >
        {options.map((option) => (
          <div
            className={classes.listOption}
            key={option.value}
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => {
              handleSelect(option.value);
            }}
            style={{
              padding: "10px 16px",
              color: "#fff",
              cursor: "pointer",
              backgroundColor:
                selectedValue === option.value ? "#333333" : "transparent",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#333333")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};
