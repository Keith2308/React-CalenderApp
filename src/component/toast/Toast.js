import React from "react";
import "./Toast.css";

const Toast = () => {
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
