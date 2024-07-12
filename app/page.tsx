"use client";

import React from 'react';
import { Stack, Button, Card, CardText } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Navbar';
import MovieCard from "./MovieCard";
import InputForm from "./InputForm";

export default function Home() {
  return (
    <>
      <NavigationBar />
      <div className="container">
        <div className="row">
          <div className="col pt-4 text-center ">
            <h1 style={{ fontSize: "35px", color: "yellow" }}>Home Movie List</h1>
            <h2 style={{ fontSize: "20px", color: "red" }}>Muhammad Adika Zahran</h2>
            <h3 style={{ fontSize: "16px", color: "white" }}>Kelas Pemrograman Web 2023-2024</h3>
          </div>
        </div>
        
            <br />
            <InputForm />
            <br />
        
        <div>
          <MovieCard />
        </div>
      </div>
    </>
  );
}
