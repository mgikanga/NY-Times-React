import React, { Component } from "react";
import SaveBtn from "./SaveBtn";
import API from "../utils/API";
class SavedArticles extends Component {
    state = {
        title: "",
        link: "",
        date: "",
        results:[]
    }

    componentDidMount(){
        this.getArticles()
    }
    
    getArticles = (myArt) =>{
        API.getArticles(myArt)
        .then(data => this.setState({results: data.data}))
    }
    


    render() {
        console.log(this.state)
        return (
            <div className="container">
               <h2>Title:  {this.state.title} </h2>
               <h4> Date: {this.state.date} </h4>
               <a href= {this.state.link}> link</a>


    </div>

        )
    }
}

export default SavedArticles;