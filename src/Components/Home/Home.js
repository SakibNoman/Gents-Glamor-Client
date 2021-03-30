import React from 'react';
import allProduct from '../../fakeData/fakeData.json';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {
    return (
        <div className="d-flex justify-content-center" >
            <div className="row d-flex justify-content-center" >
                {
                    allProduct.map(each => <SingleProduct item={each} ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Home;