import React from 'react'
import { ThemeContext } from './../contexts/ThemeContext';

export default function Navbar() {
    return (
        <ThemeContext.Consumer>
            {(context) => {
            const theme = context.isLightTheme ? context.light : context.dark;
            return (
        <div>
            <nav style={{background: theme.ui, color: theme.text }}>
                <h1>Playlist App</h1>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
        )}}</ThemeContext.Consumer>
    )
}
