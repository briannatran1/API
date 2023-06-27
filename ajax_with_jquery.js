/*The .ajax function accepts an object and returns a promise. Inside of the object you must use these keys like method, url etc.*/
$.ajax({
    // what HTTP verb?
    method: "GET",
    // where are we making a request to?
    url: "https://omdbapi.com",
    // what should we add to the query string?
    data: {
        // a key of t and a value of titanic which will look like ?t=titanic
        t: 'titanic'
    },
    // this will add an HTTP request header of  'Accept': 'application/json'
    dataType: "json"
    // you can think of this ".then" like this: after we get the response, then what do we do? 
}).then(function(response){
    // let's see what the response is from the OMDB API!
    console.log(response);
}).catch(function(error){
    // something went wrong :(
    console.log(error);
})

/* $.get
This is simply just a shorthand for what we saw above, but without the dataType: json.*/
$.get("https://omdbapi.com?t=titanic").then(function(response){
    console.log(response);
});

/* $.getJSON
This is simply just a shorthand for what we saw above, but with the dataType: json.*/
$.getJSON("https://omdbapi.com?t=titanic").then(function(response){
    console.log(response);
});

/* $.post
If we want to make a POST request to a server (e.g. if we want to send data to it), we can either change the method with .ajax or 
use .post. The second parameter is the data we want to send to a server.*/
$.post("https://someapi.com", {name: "new user"}).then(function(response){
    console.log(response);
});