import ProductCard from "./ProductCard"

export const ProductList = ( {list}) => {
    return(
        <div>
           {list.map((el)=> <ProductCard produit={el} key={el.id}/>)}
        </div>
    )
}