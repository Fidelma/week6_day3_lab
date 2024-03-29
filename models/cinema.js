const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function () {
  const result = this.films.map((film) => {
    return film.title;
  });
  return result;
};

Cinema.prototype.filmByTitle = function(title) {
  const result = this.films.find((film) => {
    return title === film.title;
  });
  return result;
};

Cinema.prototype.filterByGenre = function (genre) {
  const result = this.films.filter((film) => {
    return genre === film.genre;
  });
  return result;
};

Cinema.prototype.checkYear = function (year) {
  const years = this.films.map((film) => {
    return film.year;
  });
  return years.includes(year);
};


// Cinema.prototype.checkLengths = function (runningTime) {
//   const times = this.films.map((film) => {
//     return film.length;
//   });
//   const result = times.every((time) => {
//     return time >= runningTime;
//   });
//   return result;
// };
Cinema.prototype.checkLengths = function (runningTime) {
  const result = this.films.every((film) => {
    return film.length >= runningTime;
  });
  return result;
};

// Cinema.prototype.totalRunningTime = function () {
//   const times = this.films.map((film) => {
//     return film.length;
//   });
//   const result = times.reduce((totalTime, filmTime) => {
//     return totalTime + filmTime;
//   })
//   return result;
// };

Cinema.prototype.totalRunningTime = function () {
  const result = this.films.reduce((totalTime, filmTime) => {
    return totalTime + filmTime.length;
  }, 0)
  return result;
};

Cinema.prototype.filmsByProperty = function (property, value) {
  const result = this.films.filter((film) => {
    return value === film[property];
  });
  return result;
};

module.exports = Cinema;
