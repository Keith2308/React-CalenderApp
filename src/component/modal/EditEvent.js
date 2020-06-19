import React, { useState, useContext, useEffect } from "react";
import EventForm from "./EventForm";
import moment from "moment";
import AppContext from "../../context/App/appContext";

const EditEvent = () => {
  const [color, setColor] = useState("");
  const [eventName, setEventName] = useState("");
  const [description, setDescription] = useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [showtime, setShowTime] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const appContext = useContext(AppContext);
  const { events, colors, selectedEvent, colorObj, editSelectedEvent } = appContext;

  //   const colorObj = {
  //     primary: "#0275d8",
  //     success: "#5cb85c",
  //     info: "#5bc0de",
  //     warning: "#f0ad4e",
  //     danger: "#d9534f",
  //   };

  useEffect(() => {
    if (Object.keys(selectedEvent).length) {
      setColor(selectedEvent.bgColor);
      setEventName(selectedEvent.title);
      setCheckBox(selectedEvent.allDay);
      setDescription(selectedEvent.description);
      const start = `${moment(new Date(selectedEvent.start)).format()}`;
      let end = "";
      if (!selectedEvent.allDay) {
        setShowTime(false);
        end = `${moment(new Date(selectedEvent.end)).format()}`;
      } else {
        end = `${moment(new Date(selectedEvent.end)).format("YYYY-MM-DD")}`;
      }
      setStartDate(new Date(start));
      setEndDate(new Date(end));
    }
    // eslint-disable-next-line
  }, [selectedEvent, events]);

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

  const editEvent = () => {
    const event = setEvent(selectedEvent.id);
    editSelectedEvent(event);
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
      bgColor: color,
      backgroundColor: colorObj[color],
    };

    return event;
  };

  const closeModal = () => {};

  return (
    <div>
      <EventForm
        modalId="edit-event"
        title="Edit Event"
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
        eventType={editEvent}
        colorObj={colorObj}
        buttonText="Update"
      />
    </div>
  );
};

export default EditEvent;
