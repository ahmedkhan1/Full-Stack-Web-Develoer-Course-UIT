let message; // set type any
message  = "ABcd";

let endsWithD = (<string>message).endsWith('d');  // Here we tell the comipler explicity that this variable is of type string
                                                  // This does not change the variable type in memory.
                                                  
let endsWithDAlternative = (message as string).endsWith('d'); // Alteranative way of type assertion

console.log(endsWithDAlternative);
