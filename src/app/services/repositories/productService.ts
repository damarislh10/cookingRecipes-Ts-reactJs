import axios from "axios";

export class ProductService {
    public static getProducts():Promise<any>{
        return axios.get('https://api.spoonacular.com/recipes/716429/information?apiKey=889435a7320a43baa65e88f6068111e8&includeNutrition=true')
    }
}