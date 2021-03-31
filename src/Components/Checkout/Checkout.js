import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { useParams } from 'react-router';

const Checkout = () => {

    const { productName } = useParams();

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
                        <td>{"$ " + 122}</td>
                    </tr>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td>{"$ " + 122}</td>
                    </tr>

                </tbody>
            </Table>
            <button className="btn btn-success d-block mr-0 ml-auto">Checkout</button>
        </Container>
    );
};

export default Checkout;