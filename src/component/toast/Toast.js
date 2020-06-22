import React, { useContext, useEffect } from "react";
import "./Toast.css";

import AppContext from "../../context/App/appContext";
import moment from "moment";

const Toast = () => {
  const appContext = useContext(AppContext);
  const { activeEvents, events } = appContext;

  useEffect(() => {
    addEvent();
  });

  const addEvent = () => {
    if (events.length) {
      for (const event of events) {
        const startEventDate = `${moment(new Date(event.start)).format("YYYY-MM-DDTHH:ss")}`;
        console.log(startEventDate);
        const now = moment(new Date()).format("YYYY-MM-DDTHH:ss");
        console.log(now);
        if (now === startEventDate) {
          activeEvents(event);
        }
      }
    }
  };
  return (
    <>
      <div className="notification-container notification-bottom-right">
        <div className="notification toast" style={{ backgroundColor: "red" }}>
          <button>X</button>
          <p className="notification-title">Notification</p>
          <p className="notification-subtitle">Overdue 5 mins ago</p>
          <p className="notification-message">This is a description</p>
        </div>
      </div>
    </>
  );
};

export default Toast;
