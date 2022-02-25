import { useNavigate } from 'react-router-dom'
import './style.css'

export const ItemAlbum = ({data}) => {
    const navigate = useNavigate()

    const loadAlbum = () => {
        navigate(`/album/${data.id}`)
    }
    

    return(
        <div onClick={loadAlbum} className="albumArea">
            <p>{data.title}</p>
        </div>
    )
}