import React from 'react';

export default class Footer extends React.Component {
    constructor(props) {
            super(props);
            this.foottitle = props.foottitle;
            this.footmail = props.footmail;
            this.foottel = props.foottel;
            this.foottitle = "Contact Us"
            this.footmail = "sportsstore@store.com"
            this.foottel = "1-900-900-9000"
    }






    render() {
        return (
        <footer>
            <h4>{this.foottitle}</h4>
            <ul>
                <li><a href="mailto:sportsstore@store.com">{this.footmail}</a></li>
                <li><a href="tel:19009009000">{this.foottel}</a></li>
            </ul>
        </footer>
            )
    };
}
