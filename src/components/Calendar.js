/* //**import React from "react";
import moment from "moment";
import "./calendar.css";

export default class Calendar extends React.Component{
    constructor(props) {
        super(props);
        this.width = props.width || "350px";
        this.style = props.style || {};
        
    }

    state = {
        momentContext: moment(),
        today: moment(),
        showMonthPopup: false,
        showYearPopup: false,

    }

    weekdays = moment.weekdays(); //["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    weekdaysShort = moment.weekdaysShort();
    months = moment.months();
    render(){
        return (
            <div className="calendar-container">
                <h1>Calendar</h1>
            </div>
        );
    }
}

export default Calendar; */