import React, {useContext} from 'react'
import { ThemeContext } from './../contexts/ThemeContext';
import { LockedContext } from '../contexts/LockedContext';

export default function Navbar() {
    const {isLocked, toggleLocked} = useContext(LockedContext);
    const {state} = useContext(ThemeContext);
    const theme = state.isLightTheme ? state.light : state.dark;
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
    );
}
