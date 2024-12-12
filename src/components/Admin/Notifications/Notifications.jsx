import React from "react";
import { Notification } from "../Notification/Notification";
import classes from "./Notifications.module.scss";

export const Notifications = ({ notifications }) => {
  return (
    <div className={classes.wrapper}>
      {notifications &&
        notifications.map((noti) => {
          return <Notification key={`${noti.id}`} noti={noti} />;
        })}
    </div>
  );
};
