import React from 'react'
import { Table } from 'react-bootstrap'

export default function Map() {


    // const data =['mahammmad','akmal','farman','kasam'];
    const data = [
        {id:1, name: 'mahammad', email: 'mah@gmail.com', contact: '000' },
        { id:2,name: 'akamal', email: 'ak@gmail.com', contact: '111' },
        { id:3,name: 'farman', email: 'mfa@gmail.com', contact: '222' },
        { id:4,name: 'kasam', email: 'ka@gmail.com', contact: '333' },

    ];

    return (
        <div>
            <h1>Array with map mathod</h1>
            <Table striped bordered hover size="sm" >
                <tbody>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>email</td>
                        <td>contact</td>
                    </tr>
                    {
                        data.map((item,k) =>
                            <tr key={k}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.contact}</td>
                            </tr>
                        )}
                </tbody>
            </Table>

        </div>
    )
}