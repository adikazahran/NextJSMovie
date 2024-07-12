"use client";

import React from 'react';
import { Carousel, Button } from 'react-bootstrap';

type Movie = {
  id: number;
  foto: string;
  judul: string;
  rating: number;
};

type Props = {
  movies: Movie[];
  setDelete: (id: number) => void;
};

const MovieSlider = ({ movies, setDelete }: Props) => {
  return (
    <Carousel>
      {movies.map((movie) => (
        <Carousel.Item key={movie.id}>
          <img
            className="d-block w-100"
            src={movie.foto}
            alt={movie.judul}
          />
          <Carousel.Caption className="custom-caption">
            <h3>{movie.judul}</h3>
            <p>Rating: {movie.rating}</p>
            <Button variant="danger" onClick={() => setDelete(movie.id)}>Delete</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default MovieSlider;
