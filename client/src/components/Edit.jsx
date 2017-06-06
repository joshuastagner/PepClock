import React from 'react';

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: props.match.params.id
    };
  }

  render() {
    return (
      <div>
        Hello from Edit. 
      </div>
    );
  }
}

export default Edit;
