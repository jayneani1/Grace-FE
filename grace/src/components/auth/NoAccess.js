import React from 'react';
//import "./Account.css"
import Header from '../entry/header'

function NoAccess() {

    return (
        <div className="noAccess">
            <Header />
            <h1>Access Denied</h1>
            <h1>Please login or create an account</h1>
        </div>
    );
}

export default NoAccess;