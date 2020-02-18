import React, {useContext} from 'react'
import {ThemeContext} from './../contexts/ThemeContext';

export default function Playlist() {
    const {state} = useContext(ThemeContext);
    const theme = state.isLightTheme ? state.light : state.dark;
    return (
        <div className="playlist" style={{background: theme.bg, color: theme.text }}>
            <h3>My Cool Playlist</h3>
            <ul>
                <li style={{background: theme.ui}}>Waterfall - The Stone Roses</li>
                <li style={{background: theme.ui}}>Liver Forever - Oasis</li>
                <li style={{background: theme.ui}}>Step On - The Happy Mondays</li>
            </ul>
        </div>
    );
}
