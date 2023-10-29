# movie-mania
This website is a movie catalog built on data from [The Movie Database (TMDB)](https://www.themoviedb.org/). Users can explore movies by category and navigate within categories. The movie details page provides in-depth information, including cast, trailers, and recommendations. The project is developed using Angular, Material UI, and Redux for state management. It also utilizes local storage to track recent movie visits.

## Get started

## Prerequisite

To run this project locally you need to install node and Angular CLI. Here I used node v16.16.0 and angular CLI v15.2.10.

### Clone the repo

```shell
git clone https://github.com/Alimurrazi/movie-mania.git
cd movie-mania
```

### Install npm packages

Install the `npm` packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

Go to http://localhost:4200/ in your browser to visit the website.

#### Important parts

These are the routes that are used to navigate to different pages.

-   `http://localhost:4200/movies` - The first page. Which provides different genres with sample movies. In every genre section, there is see more button. After clicking this button you can visit the genre details page.
-   `http://localhost:4200/movies/genre/:genreName/:genreId` - The page covers 10 sample movies of this specific genre. You can sort the list with rating or popularity.
-   `http://localhost:4200/movies/movie-details/:movieId` - The specific movie with details. Here you can find an overview, IMDb link, cast, and crew of the movie. Also, find some movies which are related to this movie. If the movie has an official trailer on YouTube you can find a play button. After clicking this button you can watch the trailer in a modal. After visiting this movie details page this movie is stored in the local storage as recently viewed movies. So every time at the bottom of the page you can see your recently viewed movies (max 5).
-   `http://localhost:4200/wishlist` - For every movie item, there is a wishlist button. You can add any movie to your wishlist. On this page, you can see your added movies sorted by adding dates. You can also remove previously added movies from your wishlist. For storage here I use redux.
