import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AlbumCard from './AlbumCard';
import useAlbum from '../hooks/useAlbum';

function AlbumDetail() {
  const { id } = useParams();
  const album = useAlbum(id);
  const navigate = useNavigate();

  return (
    <div className="album-detail">
      <h1>Album Details</h1>
      {album ? (
        <div>
          <AlbumCard
            id={album.id}
            name={album.name}
            artist={album.artist}
            imageUrl={album.imageUrl}
          />
          <button onClick={() => navigate(`/edit/${id}`)}>Edit Album</button>
          {/* Voeg een button toe voor bewerken */}
        </div>
      ) : (
        <span>Album niet gevonden!</span>
      )}
    </div>
  );
}

export default AlbumDetail;
