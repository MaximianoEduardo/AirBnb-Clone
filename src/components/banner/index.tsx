import React, { useState } from 'react'
import { Button } from '@material-ui/core'
import './index.css'

function Banner() {

    const [showSearch, setShowSearch] = useState(false)

    return (
        <div className='banner'>
            <div className='banner__search'>
                <Button onClick={() => setShowSearch(!showSearch)} variant='outlined' className='banner__searchButton'>
                    Search Dates
                </Button>
            </div>
            <div className='banner__info'>
                <h1>
                    Get out and stretch your imagination
                </h1>
                <span>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </span>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
