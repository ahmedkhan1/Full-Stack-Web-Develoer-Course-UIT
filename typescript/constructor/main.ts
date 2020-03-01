class person {  // Create class person
  name :string;   
  age : number;
    
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
    
  function greeting(){
    console.log("Hello my name is "+this.name+" and my age is :"+age);
  }

}

let obj  = new persion("Ahmed",33);  //call object and  pass values in constructor here

obj.greeting(); // Call greetings function to see the values assigned
