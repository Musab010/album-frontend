import React from "react";
import { Grid } from "@mui/material";
import AlbumCard from "./AlbumCard";

const AlbumOverview = ({ albums }) => {
  return (
    <div className="album-overview">
      <Grid container spacing={4}>
        {albums.map((album) => (
          <Grid item key={album.id} xs={12} sm={6} md={4}>
            <AlbumCard
              id={album.id}
              name={album.name}
              artist={album.artist}
              imageUrl={album.imageUrl}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default AlbumOverview;
