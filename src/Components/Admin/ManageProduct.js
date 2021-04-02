import React, { useEffect, useState } from 'react';
import { Navbar, Spinner, Table } from 'react-bootstrap';
import deleteIcon from '../../images/icons/delIcon.png';
import editIcon from '../../images/icons/editpro.png';

const ManageProduct = () => {

    //hook to store product list
    const [products, setProducts] = useState([]);

    //hook to decide showing spinner
    const [spinner, setSpinner] = useState(true);

    //useEffect hook to fetch all product from server
    useEffect(() => {
        fetch('https://glacial-harbor-76605.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setSpinner(false)
            })
    }, [products])

    //handling product delete operation
    const handleDelete = id => {
        fetch(`https://glacial-harbor-76605.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(result => console.log(result))
    }

    return (
        <div >
            <Navbar bg="light">
                <Navbar.Brand>Manage Products</Navbar.Brand>
            </Navbar>
            <div className="text-center" >{spinner && <Spinner animation="grow" />}</div>
            { !spinner && <Table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(each => <tr> <td>{each.productName}</td> <td>{each.productPrice}</td> <td><img onClick={() => handleDelete(`${each._id}`)} style={{ cursor: "pointer" }} width="25px" src={deleteIcon} alt="" /><img className="ml-2" width="25px" src={editIcon} alt="" /> </td> </tr>)
                    }
                </tbody>
            </Table>}
        </div>
    );
};

export default ManageProduct;