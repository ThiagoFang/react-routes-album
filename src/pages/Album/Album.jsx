import { useState, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { api } from '../../api'
import { AlbumPhotos } from '../../components/photosAlbum/AlbumPhotos'
import './Album.css'

export const Album = () => {
    const [photos, setPhotos] = useState('')
    const [albumInfo, setAlbumInfo] = useState('')
    const [loading, setLoading] =useState(false) 
    const params = useParams()
    const navigate = useNavigate()

    const handleGoHome = () => {
        navigate('/')
    }

    const loadAlbumInfo = async () => {
        setLoading(true)
        const pageAndress = `/albums/${params.slug}`
        const json = await api.getData(pageAndress)
        setAlbumInfo(json)
        setLoading(false)
    }

    const loadPhotos = async () => {
        const pageAndress =  `/albums/${params.slug}/photos`
        const json = await api.getData(pageAndress)
        setPhotos(json)
    }

    useEffect(()=>{
        loadAlbumInfo()
        loadPhotos()
    }, [])
    
    return(
        <div>
            <button onClick={handleGoHome}>Voltar</button>
        
            {loading &&
                <p>Carregando...</p>
            }

            {!loading && albumInfo.length != 0 &&
                <h3>{albumInfo.title}</h3>
            }

            {!loading && photos.length != 0 &&
                <div className='photosArea'>
                    {photos.map((item, index) => (
                       <AlbumPhotos key={index} data={item}/>
                    ))}
                </div>
            }
        </div>
    )
}