import { Box, Button, Card, CardContent, TextField } from "@mui/material";
import { useState } from "react";

import { Controller, useForm } from "react-hook-form";

function AlbumForm({ album, onSubmit }) {
  const [ name, setName ] = useState('');
  const [ artist, setArtist ] = useState('');
  const [ imageUrl, setImageUrl ] = useState('');
  const { handleSubmit, control, formState } = useForm({
    defaultValues: album
      ? album
      : {
          name:"",
          artist: "",
          imageUrl: "",
      },
  });

  return (
    <div className="album-form">
      <Card>
        <CardContent>
          <Box component="form" sx={{'& > :not(style)': { m: 1, width: '25ch' }}} onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={control}
              rules={{ required: true, }}
              render={({ field }) => (
                <TextField
                  error={!!formState.errors.name}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  label="Album naam:"
                  value={name}
                  {...field}
                />
            )} />

            <Controller
              name="artist"
              control={control}
              rules={{ required: true, }}
              render={({ field }) => (
                <TextField
                  error={!!formState.errors.artist}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  label="Album artiest:"
                  value={artist}
                  {...field}
                />
            )} />

            <Controller
              name="imageUrl"
              control={control}
              rules={{ required: true, }}
              render={({ field }) => (
                <TextField
                  error={!!formState.errors.imageUrl}
                  margin="normal"
                  fullWidth
                  variant="outlined"
                  label="Album URL:"
                  value={imageUrl}
                  {...field}
                />
            )} />
  
            <Button type="submit" variant="contained" color="primary" style={{fontSize: '16px', backgroundColor: 'orange' ,color: 'red', fontWeight: 'bold'}}>
              opslaan
            </Button>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}

export default AlbumForm;
