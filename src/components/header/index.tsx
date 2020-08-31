import React from 'react'
import Logo from '../../assets/images/logo.png'
import SearchIcon from '@material-ui/icons/Search'
import LanguageIcon from '@material-ui/icons/Language'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Avatar } from '@material-ui/core'
import './index.css'

function Header() {
    return (
        <div className='header'>
            <img className='header__icon' src={Logo} alt="AirBnb"/>
            <div className='header__center'>
                <input type='text'/>
                <SearchIcon />
            </div>
            <div className='header__right'>
                <p> Become a host </p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
