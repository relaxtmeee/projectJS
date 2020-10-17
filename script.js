const numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const lastFilm = prompt('Один из последних просмотренных вами фильмов');
const lastFilmScore = +prompt('Ваша оценка фильма');
const lastFilm2 = prompt('Один из последних просмотренных вами фильмов');
const lastFilmScore2 = +prompt('Ваша оценка фильма');

personalMovieDB.movies[lastFilm] = lastFilmScore;
personalMovieDB.movies[lastFilm2] = lastFilmScore2;

console.log(personalMovieDB);
console.log(personalMovieDB.movies);