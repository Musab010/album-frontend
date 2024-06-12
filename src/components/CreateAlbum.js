import { useNavigate } from "react-router-dom";
import AlbumForm from "./AlbumForm";

const endpoint = process.env.REACT_APP_API_URL + '/api/album';

function CreateAlbum() {
  const navigate = useNavigate();
  const handleSubmit =  (newAlbum) => {

      const request = fetch(endpoint, {
          method: 'POST',
          body: JSON.stringify(newAlbum),
          headers: {"Content-Type": "application/json"}
      });
      request.then((response) => {
        if(!response.ok) {
              console.error(response.statusText);
          } else {
              navigate("/");
          }
      })
  };

  return (
    <div className="create-album">
      <h1>Maak een album aan</h1>
      <br/>
      <AlbumForm onSubmit={handleSubmit} />
    </div>
  );
}

export default CreateAlbum;
