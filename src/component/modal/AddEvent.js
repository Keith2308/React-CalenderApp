import React, { useState, useContext } from "react";
import EventForm from "./EventForm";
import moment from "moment";
import AppContext from "../../context/App/appContext";

const AddEvent = () => {
  const [color, setColor] = useState("");
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [showtime, setShowTime] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const appContext = useContext(AppContext);
  const { addEvent, events, colors, colorObj } = appContext;

  // const colors = ["Primary", "Success", "Info", "Warning", "Danger"];
  // const colorObj = {
  //   primary: "#0275d8",
  //   success: "#5cb85c",
  //   info: "#5bc0de",
  //   warning: "#f0ad4e",
  //   danger: "#d9534f",
  // };

  const inputChange = (e) => {
    const attributeName = e.target.getAttribute("name");
    if (attributeName === "event-name") {
      setEventName(e.target.value);
    }
    if (attributeName === "description") {
      setDescription(e.target.value);
    }
  };

  const onCheckBoxChange = (e) => {
    if (e.target.checked === true) {
      setShowTime(true);
      setCheckBox(true);
    } else {
      setShowTime(false);
      setCheckBox(false);
    }
  };

  const onInputChange = (propertyName) => (e) => {
    if (propertyName === "startdate") {
      setStartDate(e);
    }
    if (propertyName === "enddate") {
      setEndDate(e);
    }
  };
  const handleChange = (e) => {
    if (e.target.value !== "Select Color") {
      setColor(e.target.value);
    } else {
      setColor("");
    }
  };
  const createEvent = () => {
    const event = setEvent(events.length + 1);
    addEvent(event);
    reset();
  };

  const setEvent = (id) => {
    const start = `${moment(startDate).format()}`;
    let end = "";
    if (!checkbox) {
      end = `${moment(endDate).format()}`;
    } else {
      end = `${moment(endDate).format("YYYY-MM-DD")}`;
    }

    const event = {
      id,
      title: eventName,
      description,
      start,
      end,
      allDay: checkbox,
      bgColor: color,
      backgroundColor: colorObj[color],
    };

    return event;
  };

  const reset = () => {
    setColor("");
    setEventName("");
    setDescription("");
    setCheckBox(false);
    setShowTime(false);
    setStartDate(new Date());
    setEndDate(new Date());
  };

  const closeModal = () => {
    reset();
  };

  return (
    <div>
      <EventForm
        modalId="add-event"
        title="Add Event"
        description={description}
        closeModal={closeModal}
        eventname={eventName}
        inputChange={inputChange}
        checkbox={checkbox}
        onCheckBoxChange={onCheckBoxChange}
        showtime={showtime}
        startDate={startDate}
        endDate={endDate}
        onInputChange={onInputChange}
        color={color}
        colors={colors}
        handleChange={handleChange}
        eventType={createEvent}
        colorObj={colorObj}
        buttonText="Save"
      />
    </div>
  );
};

export default AddEvent;
