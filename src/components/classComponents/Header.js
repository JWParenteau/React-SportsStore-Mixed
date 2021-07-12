import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>{this.title}</h1>
                <button>
                    <a href="">{this.props.buttonText}</a>
                </button>
            </header>
        );
    }
}
