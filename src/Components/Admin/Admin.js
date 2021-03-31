import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';


const Admin = () => {
    return (
        <div>
            <div className="row mx-0">
                <div className="col-2 bg-info side-bar p-0">
                    <div className="text-center mt-2" >
                        <Link to="/" className="text-white brand-name" >Gents Glamor</Link>
                    </div>
                    <div className=" side-link d-flex flex-column align-items-center text-white mt-4 w-100" >
                        <Link to="/manage-products" className="w-100 text-center p-0 dash-nav" > <p className="text-white">Manage products</p> </Link>
                        <Link to="/add-products" className="w-100 text-center p-0 dash-nav"  > <p className="text-white">Add products</p> </Link>
                        <Link to="/edit-products" className="w-100 text-center p-0 dash-nav"  > <p className="text-white">Edit products</p> </Link>
                    </div>

                </div>
                <div className="col-10">

                </div>
            </div>
        </div>
    );
};

export default Admin;