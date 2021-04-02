import React from 'react';
import { useParams } from 'react-router';
import AddProduct from './AddProduct';
import './Admin.css';
import ManageProduct from './ManageProduct';
import Sidebar from './Sidebar';


const Admin = () => {

    const { category } = useParams();
    console.log(category);

    return (

        <div className="row mx-0">
            <div className="col-2 bg-info side-bar p-0 " >
                <Sidebar></Sidebar>
            </div>
            <div style={{ marginLeft: "220px" }} className="col-10">
                {
                    category === "manage-products" ? <ManageProduct></ManageProduct> : <AddProduct></AddProduct>
                }
            </div>
        </div>
    );
};

export default Admin;