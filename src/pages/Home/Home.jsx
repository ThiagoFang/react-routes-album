import { useState, useEffect } from "react";
import { ItemAlbum } from "../../components/ItemAlbum/index.jsx";
import { api } from "../../api";

export const Home = () => {
    const [albums, setAlbums] = useState('')
    
    useEffect( async ()=>{
        const json = await api.getAllData()
        setAlbums(json)
    }, [])

    return(
        <section>
            {albums.length > 0 &&
                <div>
                    {albums.map((item, index) => (
                        <ItemAlbum key={index} data={item} />
                    ))}
                </div>
            }
        </section>
    );
}