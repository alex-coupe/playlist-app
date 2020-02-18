import React from 'react'
import { ThemeContext } from './../contexts/ThemeContext';
import { LockedContext } from '../contexts/LockedContext';

export default function Navbar() {
    return (
        <LockedContext.Consumer>{(lockedContext) => (
        <ThemeContext.Consumer>
            {(themeContext) => {
            const {isLocked, toggleLocked} = lockedContext;
            const {isLightTheme, light, dark} = themeContext.state;
            const theme = isLightTheme ? light : dark;
            return (
        <div>
            <nav style={{background: theme.ui, color: theme.text }}>
                <h1>Playlist App</h1>
                <div>
                    <button  onClick={toggleLocked}>{isLocked ? 'Playlist locked' : 'Playlist unlocked'}</button>
                </div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </div>
        )}}</ThemeContext.Consumer>
        )}</LockedContext.Consumer>
    )
}
