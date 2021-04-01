import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { UserContext } from '../../App';

const Checkout = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const { productName, productPrice, productImage } = product;
    const [{ email }] = useContext(UserContext);


    useEffect(() => {
        fetch(`http://localhost:8080/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data[0]))
    }, [productId])


    const handleCheckout = () => {
        const orderData = {
            productName: productName,
            productPrice: productPrice,
            email: email,
            productImage: productImage,
            orderDate: moment().format('MMMM Do YYYY, h:mm:ss a')
        }

        const url = 'http://localhost:8080/addOrder';

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => {
                toast('Order completed')
            })
            .catch(err => {
                console.log(err);
            })
    };

    return (
        <Container>
            <h1>Checkout</h1>
            <Table className="shadow mt-3" >
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{productName}</td>
                        <td>1</td>
                        <td>{"$ " + productPrice}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>{"$ " + productPrice}</td>
                    </tr>

                </tbody>
            </Table>
            <button onClick={() => handleCheckout()} className="btn btn-success d-block mr-0 ml-auto">Checkout</button>
        </Container>
    );
};

export default Checkout;