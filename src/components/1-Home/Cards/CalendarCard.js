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
        <li className="weekday-date">
          <ul>S</ul>
          <ul>M</ul>
          <ul>T</ul>
          <ul>W</ul>
          <ul>T</ul>
          <ul>F</ul>
          <ul>S</ul>
        </li>
        <Calendar
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default CalendarCard
