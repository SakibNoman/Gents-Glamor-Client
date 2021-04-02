import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import imageUrl from '../../images/Degree.jpg';
import './SingleProduct.css';

const SingleProduct = (props) => {

    //destructuring product info from props
    const { productName, productPrice, productImage, _id } = props.item;

    return (
        <div className="d-flex  flex-column single-card">
            <div className="card-image flex-grow-5 text-center" >
                <img src={productImage} alt="" />
            </div>
            <div className="flex-grow-1 d-flex flex-column justify-content-end">
                <div className="mb-2" ><h4>{productName}</h4></div>
                <div className="flex-grow-2 d-flex justify-content-between" >
                    <div><h2>{"$" + productPrice}</h2></div>
                    <div> <Button as={Link} to={"/checkout/" + _id} className="btn btn-dark">Buy Now</Button> </div>
                </div>
            </div>
        </div>

    );
};

export default SingleProduct;