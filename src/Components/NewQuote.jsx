import React, {Component} from 'react';
// import ReactDOM from 'react-dom';
import quotes from './QuotesDB';
import twitter from './twitter.jpg';
import instagram from './instagram.jpg';
import LinkedIn from  './linkedin.jpg';
export default class Quotes extends Component {
    constructor(props) {
        super(props);

        let randomInt = Math.floor(Math.random() * quotes.length);
        this.state = {
            quote: quotes[randomInt].quote,
            author: quotes[randomInt].author
        }

        this.randomQuote = this.randomQuote.bind(this);
    }

    randomQuote() {
        let randomInt = Math.floor(Math.random() * quotes.length);
        this.setState({quote: quotes[randomInt].quote, author: quotes[randomInt].author})
    };

    render() {
        return (<div>
           
            <p id="text">{this.state.quote}</p>
            <p id="author">{this.state.author}</p>
            <button id="new-quote" onClick={this.randomQuote} Click={this.colourChange}>New Quote</button>
            <a id="tweet-quote" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D" target="_blank">
            <img src={twitter} alt="Twitter icon" width="30" height="30" />Twitter</a>
            <a id="insta" href="https://www.instagram.com/accounts/login/" target="_blank">
            <img src={instagram} alt="Insta icon" width="30" height="30"/>Instagram</a>
            <a id="linked" href="https://www.linkedin.com/login" target="_blank">
            <img src={LinkedIn} alt="LinkedIn" width="30" height="30"/>LinkedIn</a>
        </div>);
    }
}