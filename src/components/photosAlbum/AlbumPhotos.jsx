import { useNavigate } from "react-router-dom"

export const AlbumPhotos = ({ data }) => {
    const navigate = useNavigate()
    
    const handleOpenPhoto = () => {
        const navAndress = `/photo/${data.id}`
        navigate(navAndress)
    }
    
    return(
        <div className="photoArea">
            <div onClick={handleOpenPhoto} className='photoCube'>
                <img src={data.thumbnailUrl}/>
            </div>
        </div>

    )
}