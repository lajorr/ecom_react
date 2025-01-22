import { Brand } from "./Brand";
import { Category } from "./Category";

// type Product = {
//     id: number;
//     name: string;
//     description: string;
//     price: number;
//     offer_price: number;
//     category: string;
//     brand: string;
//     stock: number;
//     image: string;
//     is_featured: boolean;
// }

export default Product


export type ProductResponse = {
    _id: string;
    name: string;
    description: string;
    price: string;
    offer_price: string;
    category: string;
    brand: string;
    stock: number;
    image: string;
    is_featured: boolean;
}
type Product = Omit<ProductResponse, 'brand' | 'category'> & {
    brand: Brand
    category: Category
}