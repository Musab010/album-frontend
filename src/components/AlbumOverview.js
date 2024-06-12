import AlbumCard from "./AlbumCard";
// import { useState } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";


const AlbumOverview = (props) => {

    return (
        <Grid container spacing={2}>
          {props.albums.map((album) => (
              <Grid item xs={6} key={album.id}>
                <Link to={`/${album.id}`}>
                  <AlbumCard
                    id={album.id}
                    name={album.name}
                    artist={album.artist}
                    imageUrl={album.imageUrl}
                  />
                </Link>
              </Grid>
          ))}
        </Grid> 
      );
}
 
export default AlbumOverview;