
export default function validate2(claim) {
    let errors2 = {};
    if(!claim.claimNumber.trim()){
        errors2.claimNumber="Claim Number required"
    }else if(claim.claimNumber.length > 9){
        errors2.claimNumber = "Claim number max length 9 only"
    }
    else if(!(/^[A-Z]+[0-9]+$/.test(claim.claimNumber))){
        errors2.claimNumber="Invalid Number must contain Upper case and Numbers only"
    }
    if(!claim.claimProgram){
        errors2.claimProgram="Claim Program required"
    }
    else if(!(/^[a-zA-Z]+$/.test(claim.claimProgram))){
        errors2.claimProgram="Invalid Programm must contain alphabet only"
    }
    if(claim.claimStartdate > claim.claimEnddate){
        errors2.claimEnddate = "End must greater than Start Date";
    }

    return errors2;
}

/*
if(!claim.id.trim()){
        errors2.id="Username required"
    }
    else if(!(/^[a-zA-Z0-9]+$/.test(claim.id))){
        errors2.id="Invalid ID"
    }
    */