import type { components } from "../api-types";

export type Product = components["schemas"]["Product"]

class ProductService {
    url = "https://localhost:7213/api/product"
    async getProducts(): Promise<Product[]> {
        const response = await fetch(this.url, {
            method: "GET"
        })

        if (!response.ok) {
            throw new Error(`Failed to fetch products: ${response.statusText}`)
        }
        const products: Product[] = await response.json()
        return products
    }
}

export default new ProductService();