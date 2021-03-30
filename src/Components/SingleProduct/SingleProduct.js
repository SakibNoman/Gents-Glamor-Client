import React from 'react';
import imageUrl from '../../images/Atar.jpg';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const { product_name, price } = props.item;

    return (
        <div className="col-md-3 d-flex flex-column single-card">
            <div className="card-image flex-grow-5 text-center" >
                <img src={imageUrl} alt="" />
            </div>
            <div className="flex-grow-1 d-flex flex-column justify-content-end">
                <div className="mb-2" ><h4>{product_name}</h4></div>
                <div className="flex-grow-2 d-flex justify-content-between" >
                    <div><h2>{price}</h2></div>
                    <div> <button className="btn btn-dark">Buy Now</button> </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;