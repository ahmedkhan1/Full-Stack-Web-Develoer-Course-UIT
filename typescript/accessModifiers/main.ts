  
class person {  // Create class person
  private name :string;   // Assign private modifiers
  private age : number; // Assign private modifiers
    
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
    
  function greeting(){
    console.log("Hello my name is "+this.name+" and my age is :"+age);
  }

}

let obj  = new persion("Ahmed",33);  //call object and  pass values in constructor here

//obj.name = "Ahmed"; // These will not work for Private modifiers
//obj.age =  23;  // These will not work for Private modifiers

obj.greeting(); // Call greetings function to see the values assigned
