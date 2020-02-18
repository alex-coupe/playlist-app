import React from 'react'
import { ThemeContext } from './../contexts/ThemeContext';

export default function ThemeToggle() {
    return (
        <ThemeContext.Consumer>
        {(context) => {
            return (
            <button onClick={context.toggleTheme}>Toggle Theme!</button>)
        }}</ThemeContext.Consumer>
    )
}
