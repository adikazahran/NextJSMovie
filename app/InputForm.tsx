import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Button, Alert, Form } from 'react-bootstrap';

const InputForm = () => {
  const [judul, setJudul] = useState('');
  const [sutradara, setSutradara] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [rating, setRating] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const fileInputRef = useRef(null);

  const simpanData = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('judul', judul);
    formData.append('sutradara', sutradara);
    formData.append('deskripsi', deskripsi);
    formData.append('rating', rating);

    if (fileInputRef.current && fileInputRef.current.files && fileInputRef.current.files[0]) {
      formData.append('image', fileInputRef.current.files[0]);
    }

    try {
      await axios.post('http://localhost:5002/api/movies', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Data berhasil disimpan!');
      setError('');
      setJudul('');
      setSutradara('');
      setDeskripsi('');
      setRating('');
      fileInputRef.current.value = null;
    } catch (error) {
      setError('Terjadi kesalahan saat mengirimkan formulir.');
      setMessage('');
    }
  };

  return (
    <div className="mt-2 gradient-custom p-3">
      <form onSubmit={simpanData} encType="multipart/form-data">
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Form.Group controlId="judul" className="mb-3">
          <Form.Label className="text-white">Judul Film</Form.Label>
          <Form.Control
            type="text"
            placeholder="Judul"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="sutradara" className="mb-3">
          <Form.Label className="text-white">Sutradara</Form.Label>
          <Form.Control
            type="text"
            placeholder="Sutradara"
            value={sutradara}
            onChange={(e) => setSutradara(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="deskripsi" className="mb-3">
          <Form.Label className="text-white">Deskripsi</Form.Label>
          <Form.Control
            as="textarea"
            rows={1}
            placeholder="Deskripsi"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="image" className="mb-3">
          <Form.Label className="text-white">Gambar Cover</Form.Label>
          <Form.Control type="file" ref={fileInputRef} />
        </Form.Group>
        <Form.Group controlId="rating" className="mb-3">
          <Form.Label className="text-white">Rating</Form.Label>
          <div className="d-flex align-items-center">
            {[5, 4, 3, 2, 1].map((value) => (
              <React.Fragment key={value}>
                <input
                  type="radio"
                  id={`${value}-stars`}
                  name="rating"
                  value={value}
                  onClick={(e) => setRating(value.toString())}
                />
                <label htmlFor={`${value}-stars`}>&#9733;</label>
              </React.Fragment>
            ))}
          </div>
        </Form.Group>
        <div className="text-center">
          <Button type="submit" className="btn btn-danger btn-lg">Simpan</Button>
        </div>
      </form>
    </div>
  );
};

export default InputForm;