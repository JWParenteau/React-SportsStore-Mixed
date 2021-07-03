import React from 'react'

import Product from './Product.js';

import products from "../data/products.json";

export default function ProductsList() {
    return (
        <section class="items">
            <ul>
            {products.map((product) => (
                <Product
                    imageUrl={product.imageUrl}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    />
                ))}
            </ul>
    </section>
    );
}
