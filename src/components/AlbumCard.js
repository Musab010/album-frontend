import React from "react";
import { Card, CardHeader, CardMedia, CardContent, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AlbumCard = ({ id, name, artist, imageUrl }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`${process.env.REACT_APP_API_URL}/api/album/${id}`, {
      method: "DELETE",
    }).then(() => {
      window.location.reload(); // Herlaad de pagina om de wijzigingen te zien
    });
  };

  return (
    <Card>
      <CardMedia component="img" image={imageUrl} height="140" />
      <CardHeader title={name} subheader={artist} />
      <CardContent>
        <Button onClick={() => navigate(`/edit/${id}`)}>Edit</Button>
        <Button onClick={handleDelete} color="secondary">Delete</Button>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
