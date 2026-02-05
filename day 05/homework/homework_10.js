// იპოვე და დაბეჭდე იმ ფილმის სახელი, რომელსაც აქვს ყველაზე მაღალი rating.

let movies = [
  { title: "Inception", rating: 8.8 },
  { title: "Avatar", rating: 7.9 },
  { title: "Interstellar", rating: 8.6 },
];

if (movies.length > 0) {
  let bestMovie = movies[0];

  for (let i = 0; i < movies.length; i++) {
    if (movies[i].rating > bestMovie.rating) {
      bestMovie = movies[i];
    }
  }

  console.log(bestMovie.title);
} else {
  console.log("list is empty");
}
