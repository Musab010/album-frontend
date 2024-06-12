import React from 'react';
import AlbumOverview from './components/AlbumOverview';
import AlbumDetail from './components/AlbumDetail';
import CreateAlbum from './components/CreateAlbum'; // Gebruik dit voor zowel nieuw als bewerken
import NavBar from './components/Navbar';
import useAlbums from './hooks/useAlbums';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const albums = useAlbums();

  return (
    <Router>
      <NavBar />
      <Container style={{ marginTop: '80px' }}>
        <Routes>
          <Route exact path="/" element={<AlbumOverview albums={albums} />} />
          <Route exact path="/:id" element={<AlbumDetail />} />
          <Route exact path="/new" element={<CreateAlbum />} />
          <Route exact path="/edit/:id" element={<CreateAlbum />} /> {/* Gebruik CreateAlbum voor bewerken */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
