import React from 'react';
import {Link } from 'react-router-dom';
import Header from './Header';
//import { Link, Route, Router } from 'react-router-dom';
const Claimsummary = () => {
    const data ={
        claim:[
            {
                id:"1",
                name :"Hari",
                claimNumber:"111111",
                claimType:"Submitted",
                claimProgram:"Accident",
                claimStartdate:"8/08/2020",
                claimEnddate:"9/08/2020"
            },
            {
                id:"2",
                name :"Sai",
                claimNumber:"222222",
                claimType:"Approved",
                claimProgram:"illness",
                claimStartdate:"9/08/2020",
                claimEnddate:"10/08/2020"
            }

        ]
    };
    let claims = data.claim.map(function (c, index){
        return(<tr key={index}>
            <td>{c.id}</td>
            <td>{c.name}</td>
            <td>{c.claimNumber}</td>
            <td>{c.claimType}</td>
            <td>{c.claimProgram}</td>
            <td>{c.claimStartdate}</td>
            <td>{c.claimEnddate}</td>
        <td>  <Link className="nav-link" to = "/update">Update</Link></td>
        </tr>);
    });
    return (
        <div>
                 <div>
                    <Header />
                </div>
            <div className="container col-12">
                <div className="card">
                <div className="card-header bg-success ">
                <h4>Cliam Summary</h4>
            </div>
            <div className="card-body">
                <table border="2px">
                    <thead>
                        <tr>
                            <th>Employee Id</th>
                            <th>Employee Name</th>
                            <th>Claim Number</th>
                            <th>Claim Type</th>
                            <th>Claim Programs</th>
                            <th>Claim Start date</th>
                            <th>Claim End date</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>{claims}</tbody>
                </table>
            </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Claimsummary;