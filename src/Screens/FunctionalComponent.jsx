import React from 'react';
import {useTheme} from '../Contexts/ThemeContext';

export default function FunctionalComponent(){
    const {darkTheme, toggleTheme} = useTheme()
    const themeStyle = {
        backgroundColor: darkTheme ? 'black' : 'white',
        color: darkTheme ? 'white' : 'black',
        padding: '2em',
        width: '100%',
        height: '100vh',
    }

    return (
        <div style={themeStyle}>
            <button onClick={toggleTheme}>{darkTheme ? 'Dark' : 'Light'} Mode</button>
            <p>This is {darkTheme ? 'Dark' : 'Light'} mode</p>
        </div>
    )
}