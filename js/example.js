(function () {
  jQuery(function () {
    this.film_rolls || (this.film_rolls = []);
    this.film_rolls["demo"] = new FilmRoll({
      container: "#demo",
      height: 560,
    });
    return true;
  });
}.call(this));
