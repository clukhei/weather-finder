import React from "react";
import searchbtn from "./images/search-button.svg";
import DatePicker from "react-datepicker";



const Form = props =>{
    const setDate = props.setDate
    const date = props.date

    return (
        <form className="form1">
        <DatePicker selected={date} onChange={date => setDate(date)}  dateFormat="yyyy-MM-dd" />
        
    </form>
    )
}
    
  




export default Form;