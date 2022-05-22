import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";
import { mount } from 'marketing/MarketingApp';
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});

export default () =>{
    return (
        <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
            <div>
                <Header />
            </div>
            </StylesProvider>
        </BrowserRouter>
    );
}