/*Using the XHR object, make a request to https://omdbapi.com and choose a title to search by using the query string and key of t.*/


/*Using the fetch API, make a request to https://omdbapi.com and choose a title to search by using the query string and key of t.*/
fetch('https://omdbapi.com/?apikey=24a85f51&t=titanic').then(function(response){
    return response.json().then(function(data){
        console.log(data);
    });
}); 