let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms== null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы просмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms(){
    for (let index = 0; index < 2; index++) {
        const lastFilm = prompt('Один из последних просмотренных вами фильмов', '');
        const lastFilmScore = prompt('Ваша оценка фильма', '');
        if (lastFilm == '' || lastFilmScore == '' ) {
            alert('Вы ничего не ввели, введите данные');
            index--;
        }else if(lastFilm == null || lastFilmScore == null) {
            alert('Вы отменили ввод, введите заного');
            index--;
        }else if(lastFilm.length > 50 || lastFilmScore > 50) {
            alert('Вы ввели слишком длинное название,введите не более 50 символов');
            index--;
        }else{
            personalMovieDB.movies[lastFilm] = lastFilmScore;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function showBD(){
    if (personalMovieDB['privat'] == false){
        console.log(personalMovieDB);
    }
}



function writeYourGenres(){
    for(i = 1; i < 4; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

showBD();