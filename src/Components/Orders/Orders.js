import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Orders = () => {
    const [products, setProducts] = useState([]);
    const [{ email }] = useContext(UserContext)
    useEffect(() => {
        fetch(`http://localhost:8080/customer/order?email=` + email)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [email])
    console.log(products);
    return (
        <Container>
            <Table hover bordered className="mt-5" >
                <tbody>
                    {
                        products.map(each => <tr>
                            <td className="text-center" > <img width="50px" src={each.productImage} alt="" /> </td>
                            <td className="text-center" > {each.productName} </td>
                            <td className="text-center" >${each.productPrice}</td>
                            <td className="text-center" >Ordered on {each.orderDate}</td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default Orders;