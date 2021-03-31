import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h1 className="text-danger text-center mt-5 pt-5" >404 Error! Page not found</h1>
            <div className="text-center" >
                <Link to="/home" className="text-dark" >back to home</Link>
            </div>
        </div>
    );
};

export default Error;