import React from "react";
import EventForm from "./EventForm";

const AddEvent = () => {
  const inputChange = (e) => {};
  const onCheckBoxChange = () => {};
  const handleChange = () => {};
  const onInputChange = (input) => {};
  const createEvent = () => {};
  const closeModal = () => {};
  return (
    <div>
      <EventForm
        modalId="add-event"
        title="Add Event"
        closeModal={closeModal}
        eventname="Watch movies"
        inputChange={inputChange}
        checkbox={false}
        onCheckBoxChange={onCheckBoxChange}
        showtime={false}
        startDate={new Date()}
        endDate={new Date()}
        onInputChange={onInputChange}
        color="Primary"
        colors={["Primary", "Danger"]}
        handleChange={handleChange}
        eventType={createEvent}
        buttonText="Save"
      />
    </div>
  );
};

export default AddEvent;
