// SMIT Javascript Assignment 3
//submitted by Nimra Jawed
(async function(){
    const response= await fetch("./data.json");
    const movies=await response.json();
    console.log(movies)
   
const genreInput = document.getElementById('genreInput');
const ratingInput = document.getElementById('ratingInput');
const releaseYearInput = document.getElementById('releaseYearInput');
const btnElem=document.getElementById("recBtn")
const recList = document.getElementById('recommendationsList');
const detailElem=document.getElementById("movieDetailContainer");

function movieDetail(movie){
    detailElem.innerHTML=`
    <h2>${movie.title}</h2>
    <ul>${movie.genres.map(function(genre){
        return "<li>"+ genre +"</li>"
    }).join("")}</ul>
    <h3>Rating</h3>
    <div>${movie.vote_average}</div>
    <h3>Release date</h3>
    <div>${movie.release_date}</div>
    <h3>Language</h3>
    <div>${movie.original_language}</div>
    `
}

function displayMovie(results){
    recList.innerHTML=""
results.forEach(function(movie){
    const li=document.createElement("li");
    li.innerHTML=movie.title;
    li.addEventListener("click",function(){
        movieDetail(movie)
    })
    recList.appendChild(li);
})
}


function search(){
  const genre = genreInput.value;
  const rating = Number(ratingInput.value);
  const releaseYear = Number(releaseYearInput.value);
const results = movies.filter(function (movie){
    return (movie.genres.join(" ").toLowerCase().incudes(genre)&& movie.vote_average>=rating && movie.release_date>=releaseYear);
})

}

btnElem.addEventListener("click",search);
})();
