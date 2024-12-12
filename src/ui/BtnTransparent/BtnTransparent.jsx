import React from "react";
import classes from "./BtnTransparent.module.scss";
import { useTranslation } from "react-i18next";
export const BtnTransparent = ({ color }) => {
  const { t } = useTranslation();
  return (
    <button style={{ color: `${color}` }} className={classes.btn}>
      <div className={classes.btn_container}>
        {t("thank.redBtn")}
        <span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.49978 11.25H20.6885L17.471 8.02874C17.3482 7.88526 17.284 7.7007 17.2912 7.51195C17.2985 7.32319 17.3768 7.14414 17.5104 7.01056C17.6439 6.87699 17.823 6.79874 18.0117 6.79145C18.2005 6.78416 18.3851 6.84837 18.5285 6.97124L23.0285 11.4712C23.1167 11.5578 23.1828 11.6643 23.2213 11.7818C23.2598 11.8993 23.2696 12.0242 23.2498 12.1462C23.2159 12.2875 23.1447 12.417 23.0435 12.5212L18.5435 17.0212C18.4763 17.0997 18.3936 17.1635 18.3005 17.2085C18.2075 17.2535 18.1061 17.2788 18.0028 17.2828C17.8995 17.2868 17.7965 17.2694 17.7003 17.2317C17.604 17.194 17.5166 17.1368 17.4435 17.0637C17.3704 16.9906 17.3133 16.9032 17.2755 16.807C17.2378 16.7107 17.2204 16.6077 17.2244 16.5044C17.2284 16.4012 17.2537 16.2998 17.2987 16.2068C17.3438 16.1137 17.4075 16.031 17.486 15.9637L20.6885 12.75H1.49978C1.30086 12.75 1.1101 12.671 0.969446 12.5303C0.828793 12.3897 0.749777 12.1989 0.749777 12C0.749777 11.8011 0.828793 11.6103 0.969446 11.4697C1.1101 11.329 1.30086 11.25 1.49978 11.25Z"
              fill={color}
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
          fill={color}
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
          fill={color}
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
          fill={color}
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
          fill={color}
        />
      </svg>
      <span className={classes.fillEffect}></span>
    </button>
  );
};
