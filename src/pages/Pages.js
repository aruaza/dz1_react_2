import React from 'react';
import {Route, Routes} from "react-router-dom-v5-compat";
import Card from "./card/Card";
import CreateCard from "./createCard/CreateCard";

const Pages = () => {
    return (
        <Routes>
            <Route path='/' element={<Card/>}/>
            <Route path='/card' element={<Card/>}/>
            <Route path='/createCard' element={<CreateCard/>}/>
        </Routes>
    );
};

export default Pages;