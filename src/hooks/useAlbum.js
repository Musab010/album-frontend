import { useEffect, useState } from "react";
const endpoint = process.env.REACT_APP_API_URL + '/api/album/';

const useAlbum = (id) => {
    const [album, setAlbum ] = useState(null);
    if(id == "new"){
        id = "";
    }
    useEffect(() => {
        fetch(endpoint +  id,
            )
            .then(async response => {
                if (!response.ok) {
                    return;
                }
                
                setAlbum(await response.json())
            })
            .catch(error => console.error(error));
    }, []);
    return album;
}


export default useAlbum;