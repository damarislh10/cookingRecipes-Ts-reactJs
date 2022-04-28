import { Product } from "../../interfaces/product/product.interface"

interface Props{
    product:Product
    index:number
}

export function CardProduct({product}:Props){
    return (
        <div className="card">
            <div>
                <h4>{product.name}</h4>
                <img src={`https://spoonacular.com/cdn/ingredients_250x250/${product.image}`}/>
            </div>
        </div>
    )
}