<h1 align="center">Kevflix</h1>

<br/>

## About

I made Kevflix to expand and showcase my skills as a front end engineer.

I used **NextJS**, **React**, and **JavaScript** to build the full structure of this project, including *dynamic URLs* for every movie/TV show.<br/>
To retrieve all the data, Kevflix uses **NextJS**' *getServerSideProps* to fetch and query **TMDB API** endpoints and then passes the data as props for each page.<br/>
To store user information, I created a **PostgreSQL** database in **Heroku**.<br/>
To style this project, I used **Tailwind CSS** and a little bit of custom CSS. Making use of Talwind breakpoints, I made Kevflix **fully responsive**.<br/>
**Swiper** is used in each row to provide a better user experience. In the future, I will improve this to match Netflix behavior more closely.<br/>
Finally, I deployed this project on **Vercel** to have an easy solution for Continuous Integration.

## Tech stack

- [TMDb API's](https://www.themoviedb.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [React](https://reactjs.org/)
- [NextJS](https://nextjs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Heroku](https://www.heroku.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Swiper](https://swiperjs.com/)
- [Vercel](https://vercel.com/)

## Features

:heavy_check_mark: &nbsp;&nbsp;Display movies and TV shows by categories, including: trending, popular, upcoming, action, animation, drama, romance, etc.<br/>
:heavy_check_mark: &nbsp;&nbsp;Connection with TMDB API on user request, thanks to NextJS' getServerSideProps.<br/>
:heavy_check_mark: &nbsp;&nbsp;Fully responsive.<br/>
:heavy_check_mark: &nbsp;&nbsp;Swipeable movie/shows rows.<br/>
:heavy_check_mark: &nbsp;&nbsp;CI implementation with Vercel deployment.

## To-do list

- [ ] Implement user authentication (register, login, logout).
- [ ] Add an 'add to list' feature for authenticated users.
- [ ] Add 'my list' page for authenticated users.
- [ ] Make navbar background transparent and turn opaque after scroll.
- [ ] Add gradient over index hero section background.
- [ ] Improve Swiper beahavior to match Netflix original scroll more closely.
- [ ] Add category pages for each category, with infinite scroll.
- [ ] Implement search page with many filters, including languages, genres, and more.

## Demo

[Vercel deployment] (https://kevflix.vercel.app/)
