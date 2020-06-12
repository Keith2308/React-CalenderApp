import React from "react";
import AddEvent from "../modal/AddEvent";

const SideBar = () => {
  return (
    <div className="col-lg-3">
      <button
        data-toggle="modal"
        data-target="#add-event"
        className="btn btn-primary btn-block"
      >
        Create New Event
      </button>
      <div className="m-t-20">
        <br />
        <div className="external-event bg-primary">Watch Movie</div>
        <div className="external-event bg-success">Call Friend</div>
        <div className="external-event bg-danger">Eat Dinner</div>
      </div>

      <AddEvent />
    </div>
  );
};

export default SideBar;
