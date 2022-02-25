import { useState,useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { api } from "../../api"

export const Photo = () => {
    const [photoData, setPhotoData] = useState('')
    const [loading, setLoading] = useState(false)
    const params = useParams()
    const navigate = useNavigate()


    useEffect(()=>{
        loadPhotoData()
    },[])

    const loadPhotoData = async () => {
        setLoading(true)
        const dataAndress = `/photos/${params.slug}`
        const json = await api.getData(dataAndress)
        setPhotoData(json)
        setLoading(false)
    }

    const handleGoBack = () => {
        navigate(-1)
    }
    
    return (
        <div>
            <button onClick={handleGoBack}>Voltar</button>

            {loading &&
                <p>Carregando...</p>
            }
                <div>
                    <p>{photoData.title}</p>
                    {console.log()}
                    <img src={photoData.url}/>
                </div>

        </div>
    )
}