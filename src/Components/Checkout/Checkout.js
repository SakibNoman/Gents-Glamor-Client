import moment from 'moment';
import React, { useContext, useEffect, useState } from 'react';
import { Container, Spinner, Table } from 'react-bootstrap';
import { useParams } from 'react-router';
import { toast } from 'react-toastify';
import { UserContext } from '../../App';

const Checkout = () => {

    //getting product id from dynamic parameter
    const { productId } = useParams();

    //useState hook to keep specific product
    const [product, setProduct] = useState({});

    //destructuring data from product object
    const { productName, productPrice, productImage } = product;

    //useContext to take email of logged in user
    const [{ email }] = useContext(UserContext);

    const [spinner, setSpinner] = useState(true);

    //loading specific data
    useEffect(() => {
        fetch(`https://glacial-harbor-76605.herokuapp.com/product/${productId}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data[0])
                setSpinner(false)
            })
    }, [productId])

    //handling checkout option
    const handleCheckout = () => {

        //data and additional info of ordering product
        const orderData = {
            productName: productName,
            productPrice: productPrice,
            email: email,
            productImage: productImage,
            orderDate: moment().format('MMMM Do YYYY, h:mm:ss a')
        }

        const url = 'https://glacial-harbor-76605.herokuapp.com/addOrder';

        //send product and order info to server
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
            <div className="text-center" >{spinner && <Spinner animation="grow" />}</div>
            { !(productName == undefined) && <Table className="shadow mt-3" >
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
            </Table>}
            <button onClick={() => handleCheckout()} className="btn btn-success d-block mr-0 ml-auto">Checkout</button>
        </Container>
    );
};

export default Checkout;