import React from "react";
import classes from "./ButtonTs.module.scss";

export const ButtonTs = ({ handleClickOpen, text, icon, iconTG, thank }) => {
  return (
    <button className={classes.btn__modal} onClick={handleClickOpen}>
      <div
        className={`${classes.btn_notHoverr}  ${
          thank ? "" : classes.btn_notHover
        }`}
      >
        <span>
          <svg
            className={classes.svgLogo}
            width="39"
            height="36"
            viewBox="0 0 39 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.0311 23.4787H14.1773C13.6818 23.4787 13.2797 23.8802 13.2751 24.3757C13.2593 26.0611 13.2119 28.6241 13.2054 30.2484C13.2045 30.4736 13.2882 30.6909 13.4454 30.852C15.0772 32.5248 17.3193 33.8994 18.3446 34.3097C20.6157 34.9365 26.4601 35.7599 30.7829 34.5846C35.1057 33.4094 37.4003 30.4126 38.0072 29.061C38.712 27.4745 39.734 23.5727 38.1834 20.6581C36.6328 17.7436 33.5042 16.1923 32.1338 15.7809L26.4953 14.2531C25.164 13.9006 22.1372 13.0309 20.6806 12.3728C18.8599 11.5501 19.3297 9.14089 19.3297 8.9646C19.3297 8.78832 19.5647 6.02653 25.2031 6.08529C29.0125 6.12499 30.437 8.5143 30.7997 10.2592C30.8997 10.7403 31.2957 11.1388 31.7871 11.1388H37.6936C37.7695 11.1388 37.831 11.0971 37.831 11.0213C38.0643 4.06482 31.8285 1.324 28.6169 0.807122C28.572 0.799883 28.5293 0.796753 28.4837 0.796753H20.8484C20.777 0.796753 20.7031 0.805443 20.6338 0.822836C15.4924 2.11266 13.1984 5.52787 12.6928 7.08424C12.0859 9.1213 11.5416 13.7713 14.2199 16.0747C17.5677 18.9541 19.7409 19.3066 24.8507 20.6581C29.9606 22.0097 31.6639 22.7736 31.9576 25.3591C32.1925 27.4275 30.2543 28.6889 29.2558 29.061C27.9049 29.5116 24.4631 30.107 21.5029 28.8848C19.1471 27.9121 18.2597 25.8825 18.0448 24.4427C17.9678 23.9262 17.5534 23.4787 17.0311 23.4787Z"
              fill="#EBEBEB"
            />
            <path
              d="M2.91218 5.98941L1.73022 0.796753H27.8661V6.60116L22.8329 6.61127H21.5355L17.9966 6.67172C17.9966 14.0154 17.9855 29.9477 17.9855 34.1307C12.7217 32.6267 11.1036 27.0383 10.947 24.5316V6.67172L2.91218 5.98941Z"
              fill="#9FFF00"
            />
            <path
              d="M0.981863 1.07334C0.970057 0.92425 1.08786 0.796753 1.23741 0.796753H10.9469V6.66671H2.37219C1.83727 6.66671 1.39222 6.25551 1.34999 5.72225L0.981863 1.07334Z"
              fill="#9FFF00"
            />
          </svg>
        </span>
        <span> {text} </span>
        <span>{icon}</span>
      </div>
      <div className={classes.btn_Hover}>
        <span></span>
        <span>{iconTG}</span>
      </div>
    </button>
  );
};