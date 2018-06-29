import React, { Component } from 'react';
import './style.css';


class Clock extends Component {

  state={
    days:0,
    hours:0,
    minutes:0,
    seconds:0
  }

  componentWillMount(){
    this.getTimeUntil(this.props.deadline)
  }

  componentDidMount(){
    setInterval(()=> this.getTimeUntil(this.props.deadline),1000);
  }

  getTimeUntil(deadline){
    const time = Date.parse(deadline) - Date.parse(new Date())
      const seconds = Math.floor((time/1000) % 60);
      const minutes = Math.floor((time/1000/60)%60);
      const hours = Math.floor(time/(1000*60*60)%24);
      const days = Math.floor(time/(1000*60*60*24));
      this.setState({days, hours, minutes, seconds});
    }

    leadingzero(num){
      return num < 10 ? '0' + num : num;}
      
  render() {


    return (
      <div>
      <div className="clock-days"> {this.leadingzero(this.state.days)} days</div>
      <div className="clock-hours"> {this.leadingzero(this.state.hours)} hours</div>
      <div className="clock-minutes"> {this.leadingzero(this.state.minutes)} minutes</div>
      <div className="clock-seconds"> {this.leadingzero(this.state.seconds)} seconds</div>
    </div>
    );
  }
}

export default Clock;