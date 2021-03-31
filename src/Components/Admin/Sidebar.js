import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const Sidebar = () => {
    return (
        <div>
            <div className="text-center mt-2" >
                <Link to="/" className="text-white brand-name" >Gents Glamor</Link>
            </div>
            <div className=" side-link d-flex flex-column align-items-center text-white mt-4 w-100" >
                <Link to="/admin/manage-products" className="w-100 text-center p-0 dash-nav" > <p className="text-white">Manage products</p> </Link>
                <Link to="/admin/add-products" className="w-100 text-center p-0 dash-nav"  > <p className="text-white">Add products</p> </Link>
                <Link to="/admin/edit-products" className="w-100 text-center p-0 dash-nav"  > <p className="text-white">Edit products</p> </Link>
            </div>

        </div>
    );
};

export default Sidebar;