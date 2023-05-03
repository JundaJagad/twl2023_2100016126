import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [nim, setNim] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [semester, setSemester] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Validasi form
    if (name === '' || email === '' || nim === '' || jurusan === '' || semester === '') {
      alert('Mohon isi semua field!');
    } else {
      // Kirim data form
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        name: name,
        email: email,
        nim: nim,
        jurusan: jurusan,
        semester: semester
      })
      .then(response => {
        console.log('Response:', response);
        alert('Formulir berhasil dikirim!');
      })
      .catch(error => {
        console.log('Error:', error);
        alert('Formulir gagal dikirim!');
      });
    }
  };
  

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Form Registrasi</h2>
      <div className="form-group">
        <label htmlFor="name">Nama Lengkap:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan Nama Lengkap Anda"
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Masukkan Email Anda"
        />
      </div>
      <div className="form-group">
        <label htmlFor="nim">NIM:</label>
        <input
          type="text"
          id="nim"
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          placeholder="Masukkan NIM Anda"
        />
      </div>
      <div className="form-group">
        <label htmlFor="jurusan">Jurusan:</label>
        <input
          type="text"
          id="jurusan"
          value={jurusan}
          onChange={(e) => setJurusan(e.target.value)}
          placeholder="Masukkan Jurusan Anda"
        />
      </div>
      <div className="form-group">
        <label htmlFor="semester">Semester:</label>
        <input
          type="text"
          id="semester"
          value={semester}
          onChange={(e) => setSemester(e.target.value)}
          placeholder="Masukkan Semester Anda"
        />
      </div>
      <button type="submit">Kirim</button>
    </form>
  );
};

export default Form;
