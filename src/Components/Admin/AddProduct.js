import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './Admin.css';

const AddProduct = () => {
    const { register, handleSubmit, errors } = useForm();
    const [newProduct, setNewProduct] = useState({});
    const onSubmit = data => setNewProduct(data);
    console.log(newProduct);
    return (
        <div>
            <Navbar bg="light">
                <Navbar.Brand>Add Products</Navbar.Brand>
            </Navbar>
            <div className="add-product-body" >
                <div className="container">
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="row">
                            <div className="col-6">
                                <label className="d-block" >Product name</label>
                                <input type="text" name="productName" id="" ref={register({ required: true })} />
                                {errors.productName && <span>Product name is required</span>}
                            </div>
                            <div className="col-6">
                                <label className="d-block" >Add Price</label>
                                <input type="number" name="productPrice" id="" ref={register({ required: true })} />
                                {errors.productPrice && <span>Product price is required</span>}
                            </div>
                            <div className="col-6">
                                <label className="d-block" >Add Product Image</label>
                                <input type="file" name="productImage" id="" />
                            </div>
                            <div className="col-6">
                                <input className="btn btn-dark" type="submit" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;