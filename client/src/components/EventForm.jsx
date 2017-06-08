import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';
import {WithContext as ReactTags} from 'react-tag-input';

const EventForm = (props) => (
  <div className="row">
    <div className="col">

      <div className="row">
        <form className="col-lg-7">
          <div className="form-group">
            <label>Name your event</label>
            <input type="text" className="form-control" name="eventName" value={props.eventName} placeholder="e.g. Happy Birthday Lisa!" onChange={props.handleChange}/>
          </div>
          <div className="form-group">
            <label>Recipient's first name</label>
            <input type="text" className="form-control" name="firstName" value={props.firstName} placeholder="Lisa" onChange={props.handleChange}/>
          </div>
          <div className="form-group">
            <label>Recipient's last name</label>
            <input type="text" className="form-control" name="lastName" value={props.lastName} placeholder="Johnson" onChange={props.handleChange}/>
          </div>
          <div className="form-group">
            <label>Recipient's email</label>
            <input type="email" className="form-control" name="email" value={props.email} placeholder="lisa@gmail.com" onChange={props.handleChange}/>
          </div>
        </form>
      </div>

      <div className="row">
        <div className="col-lg-7">
          <div className="form-group">
            <label>Delivery date and time</label>
            <DateTimeField
              dateTime={props.deliveryTime}
              minDate={moment().subtract(1, 'days')}
              defaultText="Select the event date and time"
              onChange={props.handleDateChange}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-7">
          <div className="form-group">
            <label>Invite others by email</label>
            <ReactTags tags={props.tags}
              handleDelete={props.handleDelete}
              handleAddition={props.handleAddition}
              placeholder="Enter email or paste a list separated by commas"
              maxLength="50"
              delimiters={[13, 44]}
              classNames={{tagInputField: 'form-control input-md', tag: 'btn btn-info', remove: ''}}
            />
          </div>
        </div>
      </div>

      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleSubmit}>Save your event!</button>

      </div>
  </div>
);

export default EventForm;
