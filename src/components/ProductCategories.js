import React from 'react'
import ProductCategory from "./ProductCategory.js";
import productCategories from "../data/productCategories.json";

export default function ProductCategories() {
    return (
    <section class="categories">
        <ul>
            {productCategories.map((category) => <ProductCategory category={category}/>)}
        </ul>
    </section>
    );
}
