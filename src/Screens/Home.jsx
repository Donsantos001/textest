import React from 'react';
import { ThemeProvider } from '../Contexts/ThemeContext';
import FunctionalComponent from './FunctionalComponent';

export default function Home(){
    return (
        <ThemeProvider>
            <FunctionalComponent />
        </ThemeProvider>
    )
}