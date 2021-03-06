import React, { useContext, useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Orders = () => {

    //useState hook to keep products array
    const [products, setProducts] = useState([]);

    //destructuring email from context
    const [{ email }] = useContext(UserContext)

    //load logged in user data
    useEffect(() => {
        fetch(`https://glacial-harbor-76605.herokuapp.com/customer/order?email=` + email)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [email])

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