import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './CalanderReact.css';
import Clock from './Clock';

class CalendarCard extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div className="time-container">
        <Clock />
        <Calendar
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default CalendarCard
