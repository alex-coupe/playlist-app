import React from 'react'
import { ThemeContext } from './../contexts/ThemeContext';
import { LockedContext } from '../contexts/LockedContext';

export default function ThemeToggle() {
    return (
        <LockedContext.Consumer>{(locked) => (
            <ThemeContext.Consumer>
            {(theme) => {
                return (
                <button onClick={theme.toggleTheme}>Toggle Theme!</button>)
            }}</ThemeContext.Consumer>
        )}</LockedContext.Consumer>
    )
}
