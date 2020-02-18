import React from 'react'
import {ThemeContext} from './../contexts/ThemeContext';

export default function Playlist() {

    return (
        <ThemeContext.Consumer>
            {(context) => {
            const {isLightTheme, light, dark} = context.state;
            const theme = isLightTheme ? light : dark;
            return (
            <div className="playlist" style={{background: theme.bg, color: theme.text }}>
                <h3>My Cool Playlist</h3>
                <ul>
                    <li style={{background: theme.ui}}>Waterfall - The Stone Roses</li>
                    <li style={{background: theme.ui}}>Liver Forever - Oasis</li>
                    <li style={{background: theme.ui}}>Step On - The Happy Mondays</li>
                </ul>
            </div>)
        }}
        </ThemeContext.Consumer>
    );
    
}
