import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import './Admin.css';

toast.configure();

const AddProduct = () => {
    const { register, handleSubmit, errors } = useForm();
    const [imageUrl, setImageUrl] = useState('');
    const notify = () => {
        toast('Product uploaded successfully')
    }
    const onSubmit = data => {
        const eventValue = {
            productName: data.productName,
            productPrice: data.productPrice,
            productImage: imageUrl
        }

        const url = 'http://localhost:8080/addProduct';

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventValue)
        })
            .then(res => {
                notify();
            })
    };

    const handleImage = (e) => {
        const files = e.target.files[0];
        const imageData = new FormData();
        imageData.set('key', 'd31833276d6f7b577c800fa621a054fd');
        imageData.append('image', files);

        fetch('https://api.imgbb.com/1/upload', {
            method: "POST",
            body: imageData
        })
            .then(res => res.json())
            .then(data => setImageUrl(data.data.display_url))
    }

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
                                <input onChange={handleImage} type="file" name="productImage" id="" />
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