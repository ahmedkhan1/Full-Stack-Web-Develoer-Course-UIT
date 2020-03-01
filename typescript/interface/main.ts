interface Contract {  //Create interface for Type checking and using Pascal casing which 
                      // involves First letter capital in naming convention
    x: number,
    y: number
}


function structure (contract:Contract){ //Pass interface here as a type
     return contract.x - contract.y;
}


structure({
    x: 1,
    y: 2
})
