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

module.exports = Cinema;
