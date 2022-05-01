export interface Product {
    id: number,
    name: string,
    image: string,
    aisle: string,
    amount: number,
    done:boolean
}

export interface Products {
    products: Product[]
}