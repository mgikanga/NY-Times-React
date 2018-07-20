import React from "react";
// import SearchResult from "SearchResult";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const SaveBtn = props => (
  <button 
    className="save-btn" 
    // {...props}
    // onClick ={this.saveArticle}
    >  
    Save Article
  </button>
);

export default SaveBtn;