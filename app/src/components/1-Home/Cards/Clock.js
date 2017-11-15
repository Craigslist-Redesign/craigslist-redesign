import React, { Component } from 'react';
import './Clock.css'

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    return (
  <div className="real-time-clock">
    <div className="date-container-for-clock">
      <div className="dayOfTheMonth">
        <p>{this.state.date.getDate()}</p>
      </div>
      <div className="theMonthTime">
        <h2>{monthNames[this.state.date.getMonth()]}</h2>
        <hr/>
     </div>
   </div>
     <div className="clock-time">
        <p>{this.state.date.toLocaleTimeString()}</p>
    </div>
  </div>
    );
  }
}

export default Clock;
