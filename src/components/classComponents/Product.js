import React from 'react'

export default class Product extends React.Component {
    constructor(props) {
    super(props);
    this.imageUrl = props.imageUrl;
    this.name = props.name;
    this.price = props.price;
    this.description = props.description;
    }

    render() {
        return (
            <li>
                <img src={this.imageUrl} alt={this.name} />
                <h3>{this.name}</h3>
                <div>{this.price}</div>
                <p>{this.description}</p>
                <button>Add to cart</button>
            </li>
        );
    }
}
