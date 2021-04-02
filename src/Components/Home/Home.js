import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import SingleProduct from '../SingleProduct/SingleProduct';

const Home = () => {

    //useState hook to keep all products array
    const [products, setProducts] = useState([]);

    //spinner showing option
    const [spinner, setSpinner] = useState(true);

    //loading data
    useEffect(() => {
        fetch('https://glacial-harbor-76605.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSpinner(false)
            })
    }, [])

    return (
        <div className="d-flex justify-content-center" >
            <div className="row d-flex justify-content-center mx-0 my-5" >
                {spinner && <Spinner animation="grow" />}
                {
                    products.map(each => <SingleProduct key={each._id} item={each} ></SingleProduct>)
                }
            </div>
        </div>
    );
};

export default Home;