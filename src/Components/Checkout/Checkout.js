import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';

const Checkout = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(`http://localhost:8080/product/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data[0]))
    }, [productId])

    const notify = () => {
        toast('Order completed')
    }

    const handleCheckout = () => {
        const orderData = {
            productName: product.productName,
            productPrice: product.productPrice,
            email: '',
            orderDate: new Date()
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
                notify();
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
                        <td>{product.productName}</td>
                        <td>1</td>
                        <td>{"$ " + product.productPrice}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>{"$ " + product.productPrice}</td>
                    </tr>

                </tbody>
            </Table>
            <button onClick={() => handleCheckout()} className="btn btn-success d-block mr-0 ml-auto">Checkout</button>
        </Container>
    );
};

export default Checkout;