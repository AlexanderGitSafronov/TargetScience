import React from "react";
import classes from "./Notification.module.scss";
import Alert from "@mui/material/Alert";
export const Notification = ({ noti }) => {
  return (
    <div className={classes.noti}>
      <Alert severity={noti.type}>{noti?.text ?? "Noti"}</Alert>
    </div>
  );
};
