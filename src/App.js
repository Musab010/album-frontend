import AlbumOverview from './components/AlbumOverview';
import AlbumDetail from './components/AlbumDetail';
import CreateAlbum from './components/CreateAlbum';
import NavBar from './components/Navbar';
import useAlbums from './hooks/useAlbums';

import {BrowserRouter as Router, Link as RouterLink, Route, Routes} from 'react-router-dom';
import {AppBar, Container, Toolbar, Link} from '@mui/material';


function App() {
const albums = useAlbums();

return (
    <Router>
       <NavBar /> 
        <Container style={{marginTop: '80px'}}>
        <Routes>
            <Route exact path="/" element={<AlbumOverview albums={albums}/>} />
            <Route exact path="/:id" element={<AlbumDetail/>} />
            <Route exact path="/new" element={<CreateAlbum />} />
        </Routes>
        </Container>
    </Router>
);
}

export default App;
