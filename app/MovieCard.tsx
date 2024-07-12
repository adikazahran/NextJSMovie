"use client";

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Spinner, Form } from 'react-bootstrap';
import MovieSlider from './MovieSlider';

type Movie = {
  id: number;
  foto: string;
  judul: string;
  rating: number;
};

const MovieCard = () => {
  const [movieData, setMovieData] = useState<Movie[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5002/api/movie');
        setMovieData(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data: ', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredMovies = movieData?.filter((movie: Movie) =>
    movie.judul.toLowerCase().includes(search.toLowerCase())
  );

  function setDelete(id: number) {
    try {
      axios.delete('http://localhost:5002/api/movies/' + id);
      window.location.reload();
    } catch (error) {
      console.log('Error delete data: ', error);
    }
  }

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={7} className="text-center mb-2 mt-2">
          <Form.Control
            type="text"
            placeholder="Search Movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="form-control-lg"
          />
        </Col>
      </Row>
      {loading ? (
        <Row className="justify-content-md-center">
          <Spinner animation="border" />
        </Row>
      ) : (
        <Row className="justify-content-md-center">
          <Col md={6}>
            <MovieSlider movies={filteredMovies ?? []} setDelete={setDelete} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MovieCard;
