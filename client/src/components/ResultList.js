import React from "react";
import SaveBtn from "./SaveBtn";
const ResultList = props => (
  <div className="container">
  <div className="row">
  <div className="col-md-12">
  <ul className="list-group">
    {props.results.map(result => (
      <li className="list-group-item" key={result._id}>
    <h3> {result.headline.main} </h3>
    <p>Date: {result.pub_date} </p>
    <p><a href={result.web_url}>More Information</a></p>
    <SaveBtn {...props}
     saveArticle = {this.saveArticle}
    />
      </li>
    ))}
  </ul>
  </div>
  </div>
  </div>
);

export default ResultList;