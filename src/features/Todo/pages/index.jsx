import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Routes, Outlet } from 'react-router-dom';
import ListPage from '../pages/listpages';
import DetailPage from '../pages/detailPages';

Todofeature.propTypes = {
    
};

function Todofeature(props) {
    return (
        <div>
           <Outlet /> 
        </div>
    );
}

export default Todofeature;