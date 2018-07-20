import React, { Component } from "react";
import SearchForm from "./Form";
// import SaveBtn from "./SaveBtn";
import ResultList from "./ResultList";
import API from "../utils/API";

class SearchResult extends Component {
    state = {
      title: "",
    //   start: "",
    //   end: "",
      results: []
    };
  
    // When this component mounts, search the Giphy API for pictures of kittens
    componentDidMount() {
      this.titleArticles("kittens");
    }
  
    titleArticles= query => {
      API.title(query)
        .then(nydata => this.setState({ results:nydata.data.response.docs}))
        // console.log("this",nydata.data.response.docs)
        .catch(err => console.log(err));
    };
  
    handleInputChange = event => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    };
  
    // When the form is submitted, search the Giphy API for `this.state.search`
    handleFormSubmit = event => {
      event.preventDefault();
      console.log(this.state.title)
      this.titleArticles(this.state.title);
      console.log(this.state.title)
    };
    
    loadArticles = () => {
      API.getArticles()
        .then(res =>
          this.setState({ articles: res.data, title: "", link: "", date: "" })
        )
        .catch(err => console.log(err));
    };
    saveArticle = id => {
      API.saveArticle(id)
        .then(res => this.loadArticles())
        .catch(err => console.log(err));
    };
  
    render() {
      return (
        <div>
          <SearchForm
            title={this.state.title}
  
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          {/* <SaveBtn
          saveArticle = {this.saveArticle}
          /> */}
          <ResultList 
          results={this.state.results} />
        </div>
      );
    }
  }
  
  export default SearchResult;
  