import React from 'react';
import "./Account.css"

function NoAccess() {

    return (
        <div className="noAccess">
            <h1>Access Denied</h1>
            <h1>Please login or create an account</h1>
        </div>
    );
}

export default NoAccess;