import React from 'react';
import DateTimeField from 'react-bootstrap-datetimepicker';
import moment from 'moment';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="row">
          <form className="col-12">
            <div className="form-group col-lg-7 row">
              <label>Name your event</label>
              <input type="text" className="form-control" name="eventName" placeholder="e.g. Happy Birthday Lisa!" onChange={this.props.handleChange}/>
            </div>
            <div className="form-group col-lg-7 row">
              <label>Recipient's first name</label>
              <input type="text" className="form-control" name="firstName" placeholder="Lisa" onChange={this.props.handleChange}/>
            </div>
            <div className="form-group col-lg-7 row">
              <label>Recipient's last name</label>
              <input type="text" className="form-control" name="lastName" placeholder="Johnson" onChange={this.props.handleChange}/>
            </div>
            <div className="form-group col-lg-7 row">
              <label>Recipient's email</label>
              <input type="email" className="form-control" name="email" placeholder="lisa@gmail.com" onChange={this.props.handleChange}/>
            </div>
          </form>
          <div className="row" style={{marginBottom: '15px'}}>
            <div className="col-lg-7">
              <DateTimeField minDate={moment().subtract(1, 'days')} defaultText="Select the event date and time" onChange={this.props.handleDateChange}/>
            </div>
          </div>
          <div className="row" style={{marginBottom: '15px'}}>
            <div className="col-lg-7">
              <div className="input-group">
                <input type="email" className="form-control" placeholder="The emails..." name="inviteEmailInput"
                  value={this.props.inviteEmailInput} onChange={this.props.handleChange} onKeyPress={this.props.handleKeyPress}/>
                <span className="input-group-btn">
                  <button className="btn btn-secondary" type="button" onClick={this.handleClick}>Add</button>
                </span>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={this.props.handleSubmit}>Create your event!</button>
        </div>
      </div>
    );
  }
}

export default EventForm;
