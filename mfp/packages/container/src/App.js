<<<<<<< HEAD
import { createGenerateClassName, StylesProvider } from "@material-ui/core/styles";
import { mount } from 'marketing/MarketingApp';
import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co',
});
console.log(mount);

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
=======
import { mount } from 'marketing/MarketingApp';
import React from "react";


console.log(mount);

export default () =>{
    return <h1>Hi There!</h1>
>>>>>>> b8291c21f281a2b4b2b7e13e98b7e8a49411d7c6
}