import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const EventForm = () => {
  return (
    <div>
      <div className="modal" id="add-event" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body p-3">
              <form>
                <div className="form-group">
                  <label className="control-label">Event Title</label>
                  <input
                    className="form-control form-white"
                    placeholder="Enter Title"
                    type="text"
                    name="event-name"
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="checkbox"
                  />
                  <label className="control-label">
                    All-day event? (optional)
                  </label>
                </div>
                <div className="form-group">
                  <label>Start</label>
                  <div className="row">
                    <div className="col-md-12">
                      <DatePicker
                        showTimeSelect
                        timeFormat="p"
                        timeIntervals={1}
                        dateFormat="Pp"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label>End</label>
                  <div className="row">
                    <div className="col-md-12">
                      <DatePicker
                        showTimeSelect
                        timeFormat="p"
                        timeIntervals={1}
                        dateFormat="Pp"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label">Choose Event Color</label>
                  <select>
                    <option>Select Color</option>
                    <option>Primary</option>
                    <option>Info</option>
                    <option>Danger</option>
                    <option>Success</option>
                  </select>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary">
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
