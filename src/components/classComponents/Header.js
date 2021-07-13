import React from 'react';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.headTitle = "Sports Store";
    }
    render() {
        return (
            <header>
                <h1 id="products" onClick={this.props.handleNavigation}>{this.headTitle}</h1>
                <button id="signup" onClick={this.props.handleNavigation}>
                    {this.props.buttonText}
                </button>
            </header>
        );
    }
}
