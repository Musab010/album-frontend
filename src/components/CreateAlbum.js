import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AlbumForm from "./AlbumForm";
import useAlbum from "../hooks/useAlbum";

function CreateAlbum() {
  const { id } = useParams(); // Haal de `id` uit de URL
  const album = useAlbum(id); // Haal albumgegevens op als `id` bestaat
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id && album) {
      setIsLoading(false); // Data is geladen
    } else if (!id) {
      setIsLoading(false); // Nieuwe album modus
    }
  }, [id, album]);

  const handleSubmit = async (data) => {
    if (id) {
      // Bewerken van een bestaand album
      await fetch(`http://alb-album-436369574.us-east-1.elb.amazonaws.com/api/album/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    } else {
      // Nieuw album aanmaken
      await fetch(`http://alb-album-436369574.us-east-1.elb.amazonaws.com/api/album`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
    }
    navigate("/"); // Terug naar overzicht na bewerking
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="create-album">
      <h1>{id ? "Bewerk Album" : "Maak Nieuw Album"}</h1>
      <AlbumForm album={album} onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateAlbum;
