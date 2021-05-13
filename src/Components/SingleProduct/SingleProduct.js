import React from 'react';
import { Link } from 'react-router-dom';
// import imageUrl from '../../images/Degree.jpg';
import './SingleProduct.css';

const SingleProduct = (props) => {

    //destructuring product info from props
    const { productName, productPrice, productImage, _id } = props.item;

    return (
        <div className="d-flex col-md-2 col-sm-3 col-4  flex-column single-card">
            <div className="card-image flex-grow-5 text-center" >
                <img src={productImage} alt="" />
            </div>
            <div className="flex-grow-1 d-flex flex-column justify-content-end">
                <div className="mb-2" ><h4 className="dynamic-text" >{productName}</h4></div>
                <div className="flex-grow-2 d-flex flex-md-row flex-column justify-content-between" >
                    <div ><h2 className="dynamic-text" >{"$" + productPrice}</h2></div>
                    <Link to={"/checkout/" + _id}><button className="btn-dark" >Buy Now</button></Link>
                </div>
            </div>
        </div>

    );
};

export default SingleProduct;