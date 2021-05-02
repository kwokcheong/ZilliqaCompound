import React from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'

const Header = ({ title }) => {
    return (
        <header className="header">
            <h1>{title}</h1>
        </header>
    )
}
export default Header;
