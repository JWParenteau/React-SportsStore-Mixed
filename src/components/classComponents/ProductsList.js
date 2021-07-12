import React from 'react';
import Product from './Product.js';
import products from "../data/products.json";

export default class ProductsList extends React.Component {
    constructor(props) {
        super(props);
/*      
        this.imageUrl = props.imageUrl;
        this.name = props.name;
        this.price = props.price;
        this.description = props.description;
*/
    }


    render() {    
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
}
