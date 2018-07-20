import React from "react";

const Form = props => (
  <div className="container">
  <div className="row">
  <div className="col-md-12">
      <div className="panel-body">


      <form >
        <div className="form-group">
          <label htmlFor="search">Search Title:</label>
          <input
          onChange={props.handleInputChange}
          value={props.title}
          name = "title"
          type="text" className="form-control" id="title"
        
          />
        </div>

  
        <div className="form-group">
          <label htmlFor="pwd">Number of Records to Retrieve:</label>
          <select className="form-control" id="num-records-select">
        <option value="1">1</option>
  
        <option value="5" selected>5</option>
        <option value="10">10</option>
      </select>
        </div>

        <div className="form-group">
          <label htmlFor="start-year">Start Year (Optional):</label>
          <input 
          onChange={props.handleInputChange}
          value={props.start}
          type="text" className="form-control" id="start-year" />
        </div>

     
        <div className="form-group">
          <label htmlFor="end-year">End Year (Optional):</label>
          <input 
          onChange={props.handleInputChange}
          value={props.end}
          type="text" className="form-control" id="end-year"/>
        </div>

        <button
        onClick={props.handleFormSubmit}
        type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
        <button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>

      </form>
     </div>
   </div>
   </div>
   </div>
    );

export default Form;