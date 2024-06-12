
import {Card, CardContent, CardHeader, CardMedia} from "@mui/material";

const AlbumCard = (props) => {
    return ( 
       <Card>
        <CardMedia component="img" image={props.imageUrl} height="140">
        </CardMedia>
        <CardHeader>
            <h1>
                Album naam:${props.name}
            </h1>
        </CardHeader>
        <CardContent>
                Gemaakt Door: {props.artist}
        </CardContent>
       </Card>
    );
}
 
export default AlbumCard;