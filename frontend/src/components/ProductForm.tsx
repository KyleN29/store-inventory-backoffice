import React from "react";
import { useState } from "react";
import type { components } from "../api-types";

export type Product = components["schemas"]["Product"];

function ProductForm() {
    const [formData, setFormData] = useState<Product>({
        name: "",
        quantity: 0,
        price: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const response = await fetch("/api/product", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Added product successfully");

            setFormData({ name: "", quantity: 0, price: 0 });
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Product</h2>

            <label>Name:</label>
            <input
                name="name"
                value={formData.name ?? ""}
                onChange={handleChange}
                required
            />

            <label>Quantity:</label>
            <input
                name="quantity"
                value={formData.quantity ?? ""}
                onChange={handleChange}
                required
            />

            <label>Price:</label>
            <input
                name="price"
                value={formData.price ?? ""}
                onChange={handleChange}
                required
            />
            <button type="submit">Save Product</button>
        </form>
    );
}

export default ProductForm;
