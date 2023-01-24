import { useParams } from "react-router-dom"

export const ProductDetails = ({list} ) => {
    const {idproduct} = useParams()
    console.log(idproduct)
const produit = list.find((el) => el.id == idproduct)
console.log(produit)
    return(
        <div>
       <img src={produit.img}/>
       <h1>{produit.name}</h1>
       <p>{produit.description}</p>
        </div>
    )
}