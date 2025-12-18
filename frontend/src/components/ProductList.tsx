import React, { useEffect, useState } from 'react'
import ProductService from '../services/ProductService'
import { type components } from '../api-types';
import './ProductList.css'
export type Product = components["schemas"]["Product"]

function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
    async function getProducts() {
        const products: Product[] = await ProductService.getProducts();
        setProducts(products);
    }
    getProducts();
    }, [])

  return (
<div className="table-container">
    <table className="inventory-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>{product.quantity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
  )
}

export default ProductList