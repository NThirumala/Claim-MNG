import {useState, useEffect} from 'react';

const useUpdateForm = (submitForm, validate2) => {
    const [claim, setclaim] = useState({
        id:'',
        name :'',
        claimNumber:'',
        cliamType:'',
        claimProgram:'',
        claimStartdate:'',
        claimEnddate:''
})
const[isSubmitted, setIsSubmitted] = useState(false);
const[errors2, setErrors2] = useState({});

const handleChange = (e) => {
    console.log("handle change executed in useUpdateForm")
    const {name, value}=e.target;
    setclaim({
        ...claim,
        [name]:value
    })
}
const handleSubmit2 = (e)=>{
        
    e.preventDefault();
    console.log(claim);
    //validations
    setIsSubmitted(true);
    setErrors2( validate2(claim));
    console.log("handle2 Submit method executed in useUpadteForm");
}
useEffect(() => {
    console.log("UseEffect executed", isSubmitted);
    if(Object.keys(errors2).length===0  && isSubmitted){

        submitForm();

    }
   
},[errors2])
    return {handleSubmit2, handleChange, errors2, claim}
};

export default useUpdateForm;