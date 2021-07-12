import React from 'react';

export default class ProductCategory extends React.Component {  
        render() {
            return (
            <li>
                <button
                className={this.props.isSelected ? "selected-category" : ""}
                id={this.props.category}
                onClick={this.props.handleClick}
                >
                    {this.props.category}
                </button>
            </li>
            );
        }
}