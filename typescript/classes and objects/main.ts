class person {  // Create class person
  name :string;   
  age : number;
  
  function greeting(){
    console.log("Hello my name is "+this.name+" and my age is :"+age);
  }

}

let obj  = new persion();  // Call object here 
obj.name = "Ahmed"; // Assign values to fields from object
obj.age =  23;  // Assign values to fields from object

obj.greeting(); // Call greetings function to see the values assigned
