import React , { Fragment } from 'react'
import NewQuote from './NewQuote'
import Header from './Header'
import Footer from './Footer'

export default function() {
    return <Fragment>
    <Header/>
        <div id="quote-box">
            
            <NewQuote />
        </div>
        <Footer/>
    </Fragment>
}
