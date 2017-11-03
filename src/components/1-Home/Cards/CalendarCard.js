import React, { Component } from 'react';
import Calendar from 'react-calendar';

class CalendarCard extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default CalendarCard
