import React from "react";
import classes from "./Header.module.scss";
import { LanguageSelector } from "./Language/LanguageSelector";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  return (
    <div className={classes.header__wrapper}>
      <div className={classes.header__content}>
        <div className={classes.content__btns_left}>
          <div className={classes.btn__telegram_wrapper}>
            <a className={classes.btn__telegram} target="_blank" href="#">
              <svg
                width="16"
                height="14"
                viewBox="0 0 16 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.753 0.602173C15.5575 0.363159 15.2648 0.231567 14.9286 0.231567C14.7459 0.231567 14.5523 0.27002 14.3533 0.346069L0.809595 5.51611C0.0908454 5.7904 -0.00595632 6.20202 0.000269252 6.42297C0.00649483 6.64392 0.12649 7.04944 0.859644 7.28271C0.864039 7.28406 0.868433 7.2854 0.872828 7.28662L3.68215 8.09057L5.20144 12.4351C5.40859 13.0273 5.87356 13.3953 6.41506 13.3953C6.75649 13.3953 7.09231 13.2522 7.38625 12.9817L9.12392 11.3817L11.6443 13.4111C11.6446 13.4114 11.6449 13.4115 11.6452 13.4117L11.6691 13.431C11.6713 13.4327 11.6736 13.4346 11.6758 13.4363C11.956 13.6536 12.2617 13.7683 12.5604 13.7684H12.5606C13.1442 13.7684 13.6089 13.3364 13.7443 12.668L15.9634 1.71045C16.0525 1.27063 15.9778 0.877075 15.753 0.602173ZM4.62197 7.93786L10.042 5.16894L6.66714 8.755C6.61184 8.81372 6.57266 8.88562 6.55337 8.96386L5.90261 11.5998L4.62197 7.93786ZM6.75112 12.292C6.72866 12.3126 6.70608 12.3311 6.6835 12.348L7.28725 9.90271L8.38552 10.7871L6.75112 12.292ZM15.0446 1.52429L12.8255 12.4819C12.8041 12.5868 12.7359 12.8308 12.5604 12.8308C12.4738 12.8308 12.3649 12.7836 12.2534 12.6978L9.39748 10.3982C9.39712 10.3978 9.39663 10.3975 9.39614 10.3972L7.6968 9.02881L12.5773 3.84289C12.7335 3.67688 12.7477 3.42261 12.6109 3.24023C12.4739 3.05786 12.2257 3.00049 12.0227 3.10425L3.99563 7.20508L1.1481 6.39038L14.6876 1.22192C14.802 1.17822 14.8819 1.16907 14.9286 1.16907C14.9573 1.16907 15.0083 1.17249 15.0272 1.1958C15.0521 1.2262 15.0839 1.32983 15.0446 1.52429Z"
                  fill="#EBEBEB"
                />
              </svg>
            </a>
          </div>
          <div className={classes.btn__language_wrapper}>
            <LanguageSelector />
          </div>
        </div>
        <div className={classes.content__btns_right}>
          <div className={classes.btn__visit_site}>
            <a href="#">
              {" "}
              <span className={classes.link__text}>
                {t("Visit the Target Science website")}
              </span>{" "}
              <span className={classes.link__red}>
                <svg
                  width="10"
                  height="11"
                  viewBox="0 0 10 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.33624 3.34003L1.17628 10.5L0 9.32373L7.15913 2.16376H0.849348V0.5H10V9.65066H8.33624V3.34003Z"
                    fill="#222222"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
