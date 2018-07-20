import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q="

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  title: function(query) {
    return axios.get(BASEURL + APIKEY + query);
  },
 // Gets all books
 getArticles: function() {
  return axios.get("/api/articles");
},
// Gets the book with the given id
// getArticles: function(id) {
//   return axios.get("/api/articles/" + id);
// },
// Deletes the book with the given id
deleteArticle: function(id) {
  return axios.delete("/api/articles/" + id);
},
// Saves a book to the database
saveArticle: function(articleData) {
  return axios.post("/api/articles", articleData);
} 
};
