import { useParams } from "react-router-dom";
import AlbumCard from "./AlbumCard";
import useAlbum from "../hooks/useAlbum"
import AlbumForm from "./AlbumForm";
import { textAlign } from "@mui/system";

function AlbumDetail() {
    const { id } = useParams();
    const album = useAlbum(id);
    return(
        <div className="album-overview">
            <h1>Gekozen Album</h1>
            {album !== null ? ( 
            <div> 
                <AlbumCard
                id={album.id}
                name={album.name}
                artist={album.artist}
                imageUrl={album.imageUrl}
                />
                <br />
                <h2>Details van het album:</h2>
                <table style={{ width:"100%" ,border: "2px solid black" }}>
                    <tr style={{ textAlign:"left" }}>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Artist</th>
                    </tr>
                    <tr>
                        <td>{album.id}</td>
                        <td>{album.name}</td>
                        <td>{album.artist}</td>
                    </tr>
                </table>
            </div> ) : 
            ( <span>Oops! it didn't work!</span> )
            
        }
        </div>
    );
}

export default AlbumDetail;