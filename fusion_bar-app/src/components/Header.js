import React, { Component } from 'react'
// import { Button } from '@material-ui/core'

class Header extends Component {
    render() {
        return (
            <header>
                <div className='bckgrd-img'>
                    <div className='title-block'>
                        <span>Fusion</span>
                        <span>Bar-App</span>
                    </div>
                </div>
                <div className="bckgrd">
                    <h1>Welcome!</h1>
                </div>
            </header>
        )
    }
}
export default Header

