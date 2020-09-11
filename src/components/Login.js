 import React from 'react';
import useForm from './useForm';
import validate from './validate';

const Login = ({submitForm}) => {
    const {handleSubmit,handleChange,errors,user} = useForm(submitForm, validate);
    return (
        <div>
            <div className="container col-6">
                <div className="card">
                    <div className="card-header bg-primary">Login</div>
                    <div className="card-body">
                    <form onSubmit = {handleSubmit}>
                        <div className="form-group">
                            <label>User Name : </label>
                            <input className = "form-control" onChange={handleChange} value = {user.username} type ="text" name ="username" id = "username" />
                            <span className="text-danger">{errors.username}</span>
                        </div>
                        <div className="form-group">
                            <label>Password : </label>
                            <input className="form-control" onChange={handleChange} type= "password" value = {user.password} id = "password" name= "password"/>
                            <span className="text-danger">{errors.password}</span>
                        </div>
                       <div className = "from-group text-center mt-3">
                            <button className ="btn btn-primary"> Login</button>
                       </div>
                        
                    </form>    
                    </div>    
                </div>           
            </div>
        </div>
       
    );
};

export default Login;