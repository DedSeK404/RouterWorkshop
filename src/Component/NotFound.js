import { useNavigate } from "react-router-dom"

export const Notfound = () => {
    const navigate = useNavigate()
    return(
        <div>
            NotFound 404
            <button onClick={()=> navigate('/') }>Go Back</button>
        </div>
    )
}