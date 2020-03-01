//Two Types of Scopes
//===========================
// a) -Variable Scope (Var) 
// b) -Block Scope  ( let and Const)

function foo(){
    for(var i=0;i<5;i++){
        console.log(i);
    }
    console.log('Final Value:'+i); //Shows value here because it variable scope
}

foo();

//  ============= Let Scope Example # 1 ===================

function bar(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
    console.log('Final Value:'+i); // This will show error here because it block scope and its only accessible within a specific block
}

bar();


//  ============= Let Scope Example # 2 ===================

function secondEg(){
    for(i=0;i<5;i++){   // This will show error here because it block scope and used before declaration
        console.log(i);
    }
    let i;
    console.log('Final Value:'+i); 
}

secondEg();
