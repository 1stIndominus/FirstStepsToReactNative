import React, {useState, useContext} from 'react';
import {getData} from './fetchData';

export const MoviesContext = useContext();

const handleGetDataFromServices = () => {
  const [moviesImages, setMoviesImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [familyMovies, setFamilyMovies] = useState();
  const [documentaryMovies, setDocumentaryMovies] = useState();

  getData()
    .then(
      ([
        upcomingMoviesData,
        popularMoviesData,
        popularTvData,
        familyMoviesData,
        documentaryMoviesData,
      ]) => {
        const moviesImagesArray = [];
        upcomingMoviesData.forEach(movie => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });

        setMoviesImages(moviesImagesArray);
        setPopularMovies(popularMoviesData);
        setPopularTv(popularTvData);
        setFamilyMovies(familyMoviesData);
        setDocumentaryMovies(documentaryMoviesData);
      },
    )
    .catch(err => {
      console.log(err);
    });
};
