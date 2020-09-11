import React from 'react';
import useUpdateForm from './useUpdateForm';
import {Button} from 'react-bootstrap';
import validate2 from "./validate2";
import Header from'./Header';
const Update = ({submitForm}) => {
    const {handleSubmit2, handleChange,errors2,claim} = useUpdateForm(submitForm, validate2 );
    return (
        <div >
            <div>
                <Header />
            </div>
            <div className="container col-6 card">
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label>ID</label>
                            <input className="form-control" onChange={handleChange} value={claim.id} type="text" name="id" id="id" />
                            <span className="text-danger">{errors2.id}</span>
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="name"value={claim.name} className="form-control" onChange={handleChange}/>
                            <span className="text-danger">{errors2.name}</span>
                        </div>
                        <div className="form-group">
                            <label>Claim Number</label>
                            <input type="text" name="claimNumber" defaultValue="XXX123456" id="claimNumber" value={claim.claimNumber} className="form-control" onChange={handleChange}/>
                            <span className="text-danger">{errors2.claimNumber}</span>
                        </div>
                        <div className="form-group">
                            <label>ClaimType</label>
                            <select name="claimtype" value= {claim.cliamType} onChange={handleChange}>
                                <option value="submitted">Submitted</option>
                                <option value="received">Received</option>
                                <option value="pending">Pending</option>
                                <option value="moreinfo">Moreinfo</option>
                                <option value="denied">Denied</option>
                                <option value="rejected">Rejected</option>
                                <option value="paid">Paid</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Claim Programs</label>
                            <input type="text" name="claimProgram" value={claim.claimProgram} className="form-control" onChange={handleChange}/>
                            <span className="text-danger">{errors2.claimProgram}</span>
                        </div>
                        <div className="form-group">
                            <label>Claim Start date</label>
                            <input type="date" name="claimStartdate" value={claim.claimStartdate} className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Claim End date</label>
                            <input type="date" name="claimEnddate" value={claim.claimEnddate} className="form-control" onChange={handleChange}/>
                            <span className="text-danger">{errors2.claimEnddate}</span>
                        </div>
                        <div className="text-center">
                             <Button variant="primary" className="btn-mar" onClick={handleSubmit2}>Submit</Button>
                            <Button variant="danger">Cancel</Button>
                        </div>
                    </form>
                </div>
            </div>
           
        </div>
    );
};

export default Update;